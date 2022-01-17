const express = require("express");
const { deleteBagCommint } = require("../controllers/Bags");
const TravalBags = express.Router();

const { getTravalBags, postTravalBags,deleteTravalBags,getTravalBag ,addCart,getcartt,deleteCart,AddTBagCommint,deleteTBagCommint} = require("../controllers/TravalBags");
const {authentication} = require("../middlewares/authentication")

TravalBags.get("/TBags", getTravalBags);
TravalBags.post("/addTBags",authentication,postTravalBags);
TravalBags.delete("/deleteTravalBags/:id",deleteTravalBags);
TravalBags.get("/TravalBag/:id", getTravalBag);

TravalBags.get("/getcartt",authentication, getcartt);
TravalBags.post("/addToTraval/:id",authentication,addCart);
TravalBags.delete("/deleteToTraval/:id",authentication,deleteCart);
TravalBags.post("/addTBagcommint/:id",authentication,AddTBagCommint);
TravalBags.put("/delTBagcommint/:id",authentication,deleteTBagCommint);




module.exports =TravalBags;
