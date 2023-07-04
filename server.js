import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/database.js";

// configure env
dotenv.config();

// database config
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to e-Commerce App.</h1>");
});

// port
const PORT = process.env.PORT || 8000;

// app serving and listening
app.listen(PORT, () => {
  console.log(
    `Started running on port : ${PORT} in ${process.env.DEV_MODE} mode`.bgCyan
      .white
  );
});
