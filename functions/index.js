const { sendEmail } = require("./sendEmail");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(
  cors({
    origin: true,
  })
);
app.use(express.static("public"));
app.use(express.json());

app.post("/payments/creditCard", async (req, res) => {
  let lineItems = [];
  const items = req.body.items;
  const values = req.body.values;

  if (typeof items !== "undefined") {
    items.forEach((item) => {
      lineItems.push({
        price_data: {
          currency: "eur",
          unit_amount: item.amount,
          product_data: {
            name: item.title,
          },
        },
        quantity: item.quantity,
      });
    });
  }
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "https://octo-mistic.com/success",
    cancel_url: "https://octo-mistic.com/cancel",
    metadata: values,
    // phone_number_collection: {
    //   enabled: true,
    // },

    // shipping_address_collection: {
    //   allowed_countries: ["PT"],
    // },
    // shipping_options: [
    //   {
    //     shipping_rate_data: {
    //       type: "fixed_amount",
    //       fixed_amount: { amount: 500, currency: "eur" },
    //       display_name: "Express",
    //       delivery_estimate: {
    //         minimum: { unit: "business_day", value: 2 },
    //         maximum: { unit: "business_day", value: 3 },
    //       },
    //     },
    //   },
    // ],
  });

  res.status(200).send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.post(
  "/webhook-test",
  express.raw({ type: "application/json" }),
  (request, response) => {
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        request.rawBody,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET_TEST
      );
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    const dataObject = event.data.object;

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        sendEmail(dataObject.metadata.email);
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);

exports.api = functions.https.onRequest(app);
