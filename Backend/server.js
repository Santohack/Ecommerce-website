import colors from "colors";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import express from "express";
import productsRoutes from "./routes/productsRoutes.js";

const app = express();
connectDb();
// app.use((req, res, next) => {
//   const err = new Error(`Not Found - ${req.originalUrl}`);
//   err.status = 404;
//   next(err);
// });
app.use((req, res, next) => {
  console.log(req.url);
  next();
});
app.use((err, req, res, next) => {
  const statusCode = req.statusCode === 200 ? 500 : req.statusCode;
  res.status(statusCode).json({
    message: err.message,
  });
});
dotenv.config({ path: "./config/.env" });
const PORT = process.env.PORT || 300;
app.listen(PORT, () =>
  console.log(`Server  started running  on port ${PORT}`.yellow.underline.bold)
);
app.use("/api/products", productsRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});
