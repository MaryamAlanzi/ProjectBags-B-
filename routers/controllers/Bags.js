const BagsModel = require("../../db/models/BagsModel");


const getBags = async (req, res) => {
  try {
    const Bags = await BagsModel.find({})
    res.status(200).json(Bags);
  } catch (error) {
    res.send(error);
  }
};

const postBags = async (req, res) => {
  const { newname, newcolor, newimg, newdescription,newprice } = req.body;
 const newBags = BagsModel({
    name: newname,
    color: newcolor,
    description: newdescription,
    img: newimg,
    price:newprice,
  });
  try {
    const savedBags = await newBags.save();
    res.status(200).json(savedBags);
  } catch (error) {
    res.send(error);
  }
};

const deleteBags = async (req, res) => {
  const id = req.params.id;
  try {
    const del = await BagsModel.findOneAndDelete({ _id: id });
    console.log(del)
    if (del) {
      res.send("deleted");
    } else {
      res.send("cant deleted");
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = { getBags, postBags, deleteBags,  };
