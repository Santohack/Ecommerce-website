import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const users = [
  {
    name: "Santo",
    email: "santo@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John",
    email: "jon@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jhn",
    email: "jn@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jn",
    email: "n@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
