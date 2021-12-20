const express = require("express");
const LoginRoute = express.Router();

const { login } = require("../controllers/Login");

LoginRoute.post("/Login", login);

module.exports = LoginRoute;
