const mongoose = require("mongoose");

const BagsModel = new mongoose.Schema({
  name: { type: String },
  color: { type: String },
   description: { type: String },
  img: { type: String },
  price:{type:String},
});

module.exports = mongoose.model("BagsModel", BagsModel);
