const express = require("express");

const SignupRoute = express.Router();

// كونست ادديوزرانه ارسال للكونترولر الفانكشن  ساين اب 
const { addsignup } = require("../controllers/Signup");

SignupRoute.post("/Signup", addsignup);

module.exports = SignupRoute;
