// مكتبه استخدمها مع الهاش لتشفير الباسورد
const bcrypt = require("bcrypt");


// احتاج سكيما اليوزر عشان اسوي لها طلب تجيب لي القيم الجديده من الادد ساين وتخزنها فيها
const UserModel  = require("../../db/models/UserModel")

//  فنكشن جديد يسوي تسجيل ياخذ الاسم والايميل والباسوردمن البودي
const addsignup = async(req, res) => {
  let { name, email, x } = req.body;
  try {
      x = await bcrypt.hash(x,10);
    const newUser = new UserModel({ name, email, password:x ,cart:[] , cartTraval:[] })
   // const newUser = new UserModel({ name:name, email:email, password:x})

   
    // الباسورد ياخذ وقت وبعدين يستخدم البيكربت والهاش
    //  يعمل لها تشفير وبعدين ينشى يوزر جديد في اليوزر موديل
    const response = await newUser.save();
// النتيجه تاخذ وقت بعدين تحفظ اليوزر

// لما انشى عنصر جديد بالداتا بيس ينشى لي 201
      res.status(201).json(response);
      // رقم التشغيل صحيح.jsonعشان تحول البيانات 
      //console.log(res.data);
      // سوينا كونسل عشان البينات تطلع صحيحه 
  } catch (error) {
      res.send(error)
      // واذا خطا يرسل لي خطا
  }
};

module.exports = { addsignup };
