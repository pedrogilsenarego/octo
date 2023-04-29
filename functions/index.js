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
    phone_number_collection: {
      enabled: true,
    },
    shipping_address_collection: {
      allowed_countries: ["PT"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 500, currency: "eur" },
          display_name: "Express",
          delivery_estimate: {
            minimum: { unit: "business_day", value: 2 },
            maximum: { unit: "business_day", value: 3 },
          },
        },
      },
    ],
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

exports.api = functions.https.onRequest(app);
