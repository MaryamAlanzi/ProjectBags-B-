const express = require("express");
const BagsRoute = express.Router();

const { getBags,getBag, postBags, deleteBags,UpdeteBags,getcart,addcart,removcart, AddBagCommint,deleteBagCommint} = require("../controllers/Bags");
const {authentication} = require("../middlewares/authentication")

BagsRoute.get("/Bags", getBags);
BagsRoute.get("/Bag/:id", getBag);
BagsRoute.put("/Bags/:id", UpdeteBags);
BagsRoute.post("/Bags",authentication,postBags);
BagsRoute.get("/getcart",authentication, getcart);
BagsRoute.post("/addcart/:id",authentication,addcart);
BagsRoute.delete("/removcart/:id",authentication, removcart);
BagsRoute.delete("/Bag/:f", deleteBags);
BagsRoute.post("/BagCommint/:id", authentication, AddBagCommint);
BagsRoute.put("/BaggCommint/:id", authentication, deleteBagCommint);



module.exports = BagsRoute;
