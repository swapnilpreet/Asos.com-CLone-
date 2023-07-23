const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../Model/user.model");
const authMiddlewares = require("../Middleware/authMiddlewares");
const { Error } = require("mongoose");
require("dotenv").config();



router.post("/register", async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (user) {
      res.send({
        success: false,
        message: "User already exists",
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashpassword = await bcrypt.hash(req.body.password, salt);
      req.body.password = hashpassword;
      const newuser = new userModel(req.body);
      await newuser.save();
      res.send({
        success: true,
        message: "User saved successfully",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});


router.post("/login", async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      throw new Error("user not found");
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      throw new Error("Enter wrong password");
    }
    const token = jwt.sign(
      { userId: user._id, email: user.email},
      process.env.SECRET
    );
    
    res.send({
      success: true,
      message: "user login in successfully",
      data: token,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});



router.get("/profile",authMiddlewares,async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);
    res.send({
      success: true,
      message: "user fetched successfully",
      data: user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});


module.exports = router;