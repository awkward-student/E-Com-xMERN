import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

// Register Controller - Method: POST

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    // validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ error: "Email is Required" });
    }
    if (!password) {
      return res.send({ error: "Password is Required" });
    }
    if (!phone) {
      return res.send({ error: "Phone Number is Required" });
    }
    if (!address) {
      return res.send({ error: "Address is Required" });
    }

    // check user
    const existingUser = await userModel.findOne({ email });
    // existing user
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Already registered please login",
      });
    }

    // register user
    const hashedPassword = await hashPassword(password);

    // save user
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });

    // try end, catching error below
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

// Login Controller - Method: POST

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Provide both email and password",
      });
    }

    // check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }

    // matching password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "invalid credentials",
      });
    }

    // creating token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login Successfull",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
    // try end, catching error below
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Eoor in Login",
      error,
    });
  }
};

// Test Controller

export const testController = (req, res) => {
  res.send("Protected Route");
  console.log("Protected Route");
};
