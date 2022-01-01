const express = require("express");
const BagsRoute = express.Router();

const { getBags,getBag, postBags, deleteBags,UpdeteBags,addBags } = require("../controllers/Bags");
const {authentication} = require("../middlewares/authentication")

BagsRoute.get("/Bags", getBags);
BagsRoute.get("/Bag/:id", getBag);
BagsRoute.put("/Bags/:id", UpdeteBags);
BagsRoute.post("/Bags",authentication,postBags);
BagsRoute.post("/addBags/:id",authentication,addBags);

BagsRoute.delete("/Bag/:f", deleteBags);


module.exports = BagsRoute;
