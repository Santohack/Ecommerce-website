import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://santohack:santohack@shopping.x5ppwou.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.green.underline.bold
    );
  } catch (error) {
    console.log(`Error: ${error}`.red.underline.bold);
    process.exit(1);
  }
};
export default connectDb;
