import express from "express";
import cors from "cors";
import { UserRouter } from "./routes/UserRouter";
import { ProductsRouter } from "./routes/ProductsRouter";
import { AddressRouter } from "./routes/AddressRouter";
import { CheckoutRouter } from "./routes/CheckoutRouter";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", UserRouter);
app.use("/api/products", ProductsRouter);
app.use("/api/address", AddressRouter);
app.use("/api", CheckoutRouter);
app.listen(3000, () => {
  console.log("chal gya re baba");
});
