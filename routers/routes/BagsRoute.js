const express = require("express");
const BagsRoute = express.Router();

const { getBags, postBags, deleteBags,getcart } = require("../controllers/Bags");
// const {authentication} = require("../middlewares/authentication")

BagsRoute.get("/Bags", getBags);
BagsRoute.post("/Bags", postBags);
BagsRoute.delete("/Bag/:id", deleteBags);
// BagsRoute.get("/cart/:id",authentication, getcart);


module.exports = BagsRoute;
