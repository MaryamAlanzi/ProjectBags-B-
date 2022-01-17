const express = require("express");
const app = express();
const cors = require("cors");
require("./db/db");
app.use(express.json());
app.use(cors());

const BagsRoute = require("./routers/routes/BagsRoute");
const SignupRoute = require("./routers/routes/SignupRoute");
const LoginRoute  = require("./routers/routes/LoginRoute")
const TravalBagsRoute = require("./routers/routes/TravalBagsRoute")

app.use(BagsRoute);
app.use(SignupRoute);
app.use(LoginRoute);
app.use(TravalBagsRoute);





////////////////////////////
const Port = 5000;
app.listen(Port,()=>{
    console.log("server is running");
})
