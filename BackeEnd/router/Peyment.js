const express = require("express");
const stripe = require('stripe')('sk_test_51QYQxiDHRDwjmTwRhIt3KTDiLGwla74TlfP1ju059zgEExtqduFA1Oxn1USpVeUTOqVUY7Rq3pBxPtlgMAZNTzQS00ETYGs4Er');

const router = express.Router();

router.post("/payment", async (req, res) => {
  try {
    const { items,  TotalPrice } = req.body;
console.log(TotalPrice,"ftokkhkhjhkjgjg");

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: 'study for 🤞😊',
          },
          unit_amount: item.price * 100, // Convert to cents
        },
        quantity: 1,
      })),
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating payment session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;