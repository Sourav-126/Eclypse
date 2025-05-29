import express from "express";
import checkout from "../data/Checkout.json";
export const CheckoutRouter = express();

CheckoutRouter.post("/cart", (req, res) => {
  res.json({ status: "Success", message: "Cart Updated" });
});

CheckoutRouter.post("/checkout", (req, res) => {
  const body = req.body();

  res.json({ status: "success", orderId: "ORD123456789" });
});
