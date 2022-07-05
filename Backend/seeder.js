import Order from "./models/orderModel.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";
import colors from "colors";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import products from "./data/products.js";
import users from "./data/users.js";

dotenv.config();
await connectDb();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const creditUsers = await User.insertMany(users);
    const creditAdmin = creditUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: creditAdmin,
      };
    });
    await Product.insertMany(sampleProducts);
    console.log("Data Imported Successfully".green.underline.bold);
    process.exit();
  } catch (error) {
    console.log(`Error in Importing Data ${error}`.red.underline.bold);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed Successfully".red.underline.bold);
    process.exit();
  } catch (error) {
    console.log(`Error in Importing Data ${error}`.red.underline.bold);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
