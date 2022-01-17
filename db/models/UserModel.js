const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
  name: { type: String },
  email: { type: String ,unique:true },
  password: { type: String },
  cart:[{type: mongoose.Schema.Types.ObjectId, ref: 'BagsModel'  }],
  cartTraval:[{type: mongoose.Schema.Types.ObjectId, ref: 'TravalBagsModel'  }]
});

module.exports = mongoose.model("UserModel", UserModel);
