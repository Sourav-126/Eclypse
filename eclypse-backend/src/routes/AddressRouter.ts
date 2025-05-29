import express from "express";

export const AddressRouter = express();

AddressRouter.post("/", (req, res) => {
  res.json({ status: "success", message: "Address saved" });
});
