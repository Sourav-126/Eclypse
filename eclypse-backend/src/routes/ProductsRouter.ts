import express from "express";
import products from "../data/products.json";
export const ProductsRouter = express();

ProductsRouter.get("/", (req, res) => {
  res.json(products);
});

ProductsRouter.get("/:id", (req, res) => {
  try {
    const product = products.find((p: any) => (p.id = req.params.id));
    res.json(product);
  } catch {
    res.json("Product not found");
  }
});
