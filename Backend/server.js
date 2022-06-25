const express = require("express");
const app = express();
const products = require("./data/products");
app.listen(300, () => console.log("Server started on port 300"));

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