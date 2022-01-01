const BagsModel = require("../../db/models/BagsModel");

const getBags = async (req, res) => {
  try {
    const Bags = await BagsModel.find({});
    res.status(200).json(Bags);
    console.log(Bags, "bagssss hereeee");
  } catch (error) {
    res.send(error);
  }
};
const getBag = async (req,res)=>{
  const {id} = req.params
  try {
       const  Bag = await BagsModel.findOne({ _id:id})
       console.log(Bag);
      res.status(200).json( Bag)
  } catch (error){
      res.send(error)
  }
}

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
    const Bags = await BagsModel.findOneAndUpdate({ _id: id },
      {  name:newname, color:newcolor, img:newimg, description:newdescription, price:newprice},{new:true}
      
    );
    res.status(201).json(Bags);
  } catch (error) {
    res.send({error});
  }
};

const addBags=async (req, res) =>{


}









module.exports = { getBags, postBags, deleteBags, getBag,UpdeteBags,addBags };
