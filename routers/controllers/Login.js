const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../../db/models/userModel");
let Admin = "Maryam.com"

const login = async (req, res) => {
  let { e, pp } = req.body;
  try {
    const farh = await userModel.findOne({ email:e});
    if(Admin == e){
      const see = await bcrypt.compare(pp, farh.password);
      if (see == true) {
        const payload = { userId: farh._id, userName: farh.name };
       
        // console.log(payload)
        // {
        //   userId: new ObjectId("61c471430daf2850bc4777a2"),
        //   userName: 'Maryam'
        // }

       const token = jwt.sign(payload, "AAA");
        res.status(200).json({ token ,Admin});
     
      } else {
        res.status(403).json("wrong PassWord!");
      }

    }
    
    if (farh) {

     const see = await bcrypt.compare(pp, farh.password);
      if (see == true) {
        const payload = { userId: farh._id, userName: farh.name };
       
        // console.log(payload)
        const token = jwt.sign(payload, "AAA");
        res.status(200).json({ token });
     
      } else {
        res.status(403).json("wrong PassWord!");
      }
     }else {
      res.status(404).json("wrong Email!");
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = { login };
