const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../../db/models/userModel");

const login = async (req, res) => {
  let { e, p } = req.body;

  try {
    const farh = await userModel.findOne({ email:e});
    console.log(farh)
    if (farh) {
      const see = await bcrypt.compare(p, farh.password);
      if (see == true) {
        const payload = { userId: farh._id, userName: farh.name };
        // console.log(payload)
        const token = jwt.sign(payload, "AAA");
        res.status(200).json({ token });
      } else {
        res.status(403).json("wrong PassWord!");
      }
    } else {
      res.status(404).json("wrong Email!");
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = { login };
