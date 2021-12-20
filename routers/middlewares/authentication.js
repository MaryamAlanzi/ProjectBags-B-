const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
// لاني ابي رقم العنصر اللي له رقم الاندكس1
// اسوي سبلايت واختار رقم العنصر اللي هو 1


    const valid = jwt.verify(token, "AAA");
    req.token = valid;
    next();
// نكست تعني اذا تحقق الشرط روح للي بعده

  } catch (error) {
    res.status(403);
    res.send(error);
  }
};

module.exports = { authentication };
