const jwt = require("jsonwebtoken");
const userModel=require('../model/User.model');
//model is optional

const isAuth = async(req, res, next) => {
  const token =
    req.header("Authorization").replace("Bearer ", "") ||
    req.cookies.token ||
    req.body.token;

  if (!token) {
    return res.status(403).send("token is missing");
  }

  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decode);
    //bring info from DB
    const user= await userModel.findOne({email:decode.email})
    // res.status(201).send({name:user.firstname+" "+user.lastname});
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};


module.exports=isAuth;
