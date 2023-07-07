import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/database.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

// configure env
dotenv.config();

// database config
connectDB();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);

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
