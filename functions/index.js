const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.stripeSecretKey);

const app = express();

app.use(
  cors({
    origin: true,
  })
);
app.use(express.json());

app.post("/payments/creditCard", async (req, res) => {
  try {
    const { amount, shipping } = req.body;
    const paymentIntent = await stripe.paymentIntent.create({
      shipping,
      amount,
      currency: "eu",
    });
    res.status(200).send(paymentIntent.client_secret);
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: err.message,
    });
  }
});

app.get("*", (req, res) => {
  res.status(404).send("404, Not Found!");
});
exports.api = functions.https.onRequest(app);
