const BagsModel = require("../../db/models/BagsModel");
const UserModel = require("../../db/models/UserModel");

const getBags = async (req, res) => {
  try {
    const Bags = await BagsModel.find({});
    res.status(200).json(Bags);
    console.log(Bags, "bagssss hereeee");
  } catch (error) {
    res.send(error);
  }
};
const getBag = async (req, res) => {
  const { id } = req.params;
  try {
    const Bag = await BagsModel.findOne({ _id: id });
    console.log(Bag);
    res.status(200).json(Bag);
  } catch (error) {
    res.send(error);
  }
};

const postBags = async (req, res) => {
  const { newname, newcolor, newimg, newdescription, newprice } = req.body;
  const token = req.token.userId;
  const newBags = new BagsModel({
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
  } catch (error) {
    res.send(error);
  }
};

const deleteBags = async (req, res) => {
  const p = req.params.f;
  try {
    const del = await BagsModel.findOneAndDelete({ _id: p });
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

const UpdeteBags = async (req, res) => {
  const id = req.params.id;
  const { newname, newcolor, newimg, newdescription, newprice } = req.body;
  try {
    const Bags = await BagsModel.findOneAndUpdate(
      { _id: id },
      {
        name: newname,
        color: newcolor,
        img: newimg,
        description: newdescription,
        price: newprice,
      },
      { new: true }
    );
    res.status(201).json(Bags);
  } catch (error) {
    res.send({ error });
  }
};

const getcart = async (req, res) => {
  const userId = req.token.userId;
  try {
    const getBags = await UserModel.findOne({ _id: userId }).populate('cart');
    res.status(200).json(getBags.cart);
    console.log(getBags, "done cart ");
  } catch (error) {
    res.send(error);
  }
};

const addcart = async (req, res) => {
  console.log("mmmmmm");
  console.log(req.token, req.params, "mmmmmm");

  const id = req.params.id;
  const userId = req.token.userId;
  try {
    const newCart = await UserModel.findOneAndUpdate(
      { _id: userId },
      { $push: { cart: id } },
      { new: true }
    );
    console.log(newCart, "carrrrrrt");

    res.status(201).json(newCart);
    
  } catch (error) {
    res.send(error);
  }
};




const removcart = async (req, res) => {
  const id = req.params.id;
  const userId = req.token.userId;
  console.log(id);
  console.log(userId,"ggg");
  try {
    const uncart = await UserModel.findOneAndUpdate(
      { _id: userId },
      { $pull: { cart: id } },
      { new: true }
    );
    console.log(uncart, "delll");
    res.status(200).json(uncart);
    console.log("delll");
  } catch (error) {
    res.send(error);
  }
};


const AddBagCommint = async (req, res) => {
  try {
    const { Commint } = req.body;
    const id = req.params.id;
    const user = req.token.userId;
    const userName = req.token.userName;
    console.log(id, user, userName);
    const response = await BagsModel.findOneAndUpdate(
      { _id: id },
      { $push: { Commint: { Commint, userName, user } } },
      { new: true }
    );
    //???????? ???????? ???????? ?????????? ???????? ?????????? ?????? ???????????? ?? ???????????????? ????????????
    res.status(200).json(response.Commint);
  } catch (error) {
    res.status(400).json(error);
  }
};


const deleteBagCommint = async (req, res) => {
  try {
    const { Commint } = req.body;
    const id = req.params.id;
    const user = req.token.userId;
    const userName = req.token.userName;
    console.log(id, user, userName);
    const response = await BagsModel.findOneAndUpdate(
      { _id: id },
      { $pull: { Commint: { Commint, userName, user } } },
      { new: true }
    );
    //???????? ???????? ???????? ?????????? ???????? ?????????? ?????? ???????????? ?? ???????????????? ????????????
  
    res.send(response.Commint);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {getBags, postBags,deleteBags,getBag,UpdeteBags, getcart,addcart, removcart,AddBagCommint,deleteBagCommint};
