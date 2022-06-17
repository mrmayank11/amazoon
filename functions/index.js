const functions = require("firebase-functions");
const cors = require('cors');
const express = require('express');
const stripe = require('stripe')('sk_test_51LAz8HSD3cOCCmPUzcSNoHgzgU8PfHtcEVxdErHiYuybT6nVS6JSl6oJzr0KuhShrtZTuF4Ls8zRw4fscPFpZaiK001iNu4S9I')

// API

// - App config
const app = express();

//- Middlewares

// cors is a kind of security

app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (req, res) => res.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved B0OM!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
//- Listen command

exports.api = functions.https.onRequest(app);

// http://localhost:5001/challenge-29c9f/us-central1/api