const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: { type: String },
  email: { type: String ,unique:true },
  password: { type: String },
  cart:[{type: mongoose.Schema.Types.ObjectId, ref: 'BagsModel'  }]
});

module.exports = mongoose.model("userModel", userModel);
