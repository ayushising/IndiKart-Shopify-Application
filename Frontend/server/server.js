const express = require("express");
const app = express();
const { resolve } = require("path");
// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

app.use(express.static(process.env.STATIC_DIR));
app.use(express.json());

app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/create-payment-intent", async (req, res) => {
  console.log("hiiid");
  console.log(req.body);
  console.log(req.body.amount);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      description: "Software development services",
      shipping: {
        name: "Jenny Rosen",
        address: {
          line1: "510 Townsend St",
          postal_code: "98140",
          city: "San Francisco",
          state: "CA",
          country: "US",
        },
      },
      amount: req.body.amount * 100,
      currency: "inr",
      payment_method_types: ["card"],

      // automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

// app.post("/create-customer-intent", async (req, res) => {
//   try {
//     const customerIntent = await stripe.customers.create({
//       name: "Jenny Rosen",
//       address: {
//         line1: "510 Townsend St",
//         postal_code: "98140",
//         city: "San Francisco",
//         state: "CA",
//         country: "US",
//       },
//     });

//     // Send publishable key and PaymentIntent details to client
//     res.send({
//       clientSecret: customerIntent.client_secret,
//     });
//   } catch (e) {
//     return res.status(400).send({
//       error: {
//         message: e.message,
//       },
//     });
//   }
// });

app.listen(5252, () =>
  console.log(`Node server listening at http://localhost:5252`)
);
