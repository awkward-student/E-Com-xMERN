import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to Mongo Databse over : ${conn.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`Error while connecting to Mongo : ${error}`.bgRed.white);
  }
};

export default connectDB;
