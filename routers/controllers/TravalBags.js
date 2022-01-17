const TravalBagsModel = require("../../db/models/TravalBagsModel");
const UserModel = require("../../db/models/UserModel");

const getTravalBags = async (req, res) => {
  try {
    const Bags = await TravalBagsModel.find({});
    res.status(200).json(Bags);
    console.log(Bags, "bagssss hereeee");
  } catch (error) {
    res.send(error);
  }
};
const getTravalBag = async (req, res) => {
  const { id } = req.params;
  try {
    const Bag = await TravalBagsModel.findOne({ _id: id });
    console.log(Bag);
    res.status(200).json(Bag);
  } catch (error) {
    res.send(error);
  }
};

const postTravalBags = async (req, res) => {
  const { newname, newcolor, newimg, newdescription, newprice } = req.body;
  const token = req.token.userId;
  const newBags = new TravalBagsModel({
    name: newname,
    color: newcolor,
    img: newimg,
    description: newdescription,
    price: newprice,
  });
  console.log("newBags : ", newBags);
  try {
    const saved = await newBags.save();
    res.status(200).json(saved);
    console.log(res.data, "hhhhhhhhh");
  } catch (error) {
    res.send(error);
  }
};

const getcartt = async (req, res) => {
  const userId = req.token.userId;

  try {
    const cartTraval = await UserModel.findOne({ _id: userId }).populate(
      "cartTraval"
    );
    res.status(200).json(cartTraval.cartTraval);
    console.log("Done ", cartTraval.cartTraval);
  } catch (error) {
    res.send(error);
  }
};

const addCart = async (req, res) => {
  console.log("mmmmmm");

  const id = req.params.id;
  const userId = req.token.userId;
  try {
    const newcart = await UserModel.findOneAndUpdate(
      { _id: userId },
      { $push: { cartTraval: id } },
      { new: true }
    );
    console.log(newcart, "cartTtttttt");

    res.status(201).json(newcart);
  } catch (error) {
    res.send(error);
  }
};

const deleteTravalBags = async (req, res) => {
  const p = req.params.id;
  try {
    const del = await TravalBagsModel.findOneAndDelete({ _id: p });
    console.log(del);
    if (del) {
      res.send("deleted");
    } else {
      res.send("cant deleted");
    }
  } catch (err) {
    res.send(err);
  }
};

const deleteCart = async (req, res) => {
  const id = req.params.id;
  const userId = req.token.userId;
  console.log(id);
  console.log(userId, "ggg");
  try {
    const uncart = await UserModel.findOneAndUpdate(
      { _id: userId },
      { $pull: { cartTraval: id } },
      { new: true }
    );
    
    res.status(200).json([uncart, "dellll"]);
    console.log("delll");
  } catch (error) {
    res.send(error);
  }
};


const AddTBagCommint = async (req, res) => {
  try {
    const { Commint } = req.body;
    const id = req.params.id;
    const user = req.token.userId;
    const userName = req.token.userName;
    console.log(id, user, userName);
    const response = await TravalBagsModel.findOneAndUpdate(
      { _id: id },
      { $push: { Commint: { Commint, userName, user } } },
      { new: true }
    );
    //الكي اللي اسمه كومنت يكون داخله اسم اليوزر و الكومينت الجديد
    res.status(200).json(response.Commint);
  } catch (error) {
    res.status(400).json(error);
  }
};





const deleteTBagCommint = async (req, res) => {
  try {
    const { Commint } = req.body;
    const id = req.params.id;
    const user = req.token.userId;
    const userName = req.token.userName;
    console.log(id, user, userName);
    const response = await TravalBagsModel.findOneAndUpdate(
      { _id: id },
      { $pull: { Commint: { Commint, userName, user } } },
      { new: true }
    );
    //الكي اللي اسمه كومنت يكون داخله اسم اليوزر و الكومينت الجديد
  
    res.send(response.Commint);
  } catch (error) {
    res.send(error);
  }
};










module.exports = { getTravalBags, postTravalBags, deleteTravalBags, getTravalBag, addCart, getcartt, deleteCart,AddTBagCommint,deleteTBagCommint};

