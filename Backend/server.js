import dotenv from "dotenv";
import express from "express";
import products from "./data/Products.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 300;
app.listen(PORT, () =>
  console.log(`Server  started running ${process.env.NODE_ENV} on port ${PORT}`)
);

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
