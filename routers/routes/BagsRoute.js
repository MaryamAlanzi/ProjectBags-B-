const express = require("express");
const BagsRoute = express.Router();

const { getBags,getBag, postBags, deleteBags,getcart } = require("../controllers/Bags");
const {authentication} = require("../middlewares/authentication")

BagsRoute.get("/Bags", getBags);
BagsRoute.get("/Bag:id", getBag);
BagsRoute.post("/Bags",authentication,postBags);
BagsRoute.delete("/Bag/:f", deleteBags);
// BagsRoute.get("/cart/:id",authentication, getcart);


module.exports = BagsRoute;
