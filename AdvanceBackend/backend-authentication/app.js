const express = require("express");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./model/User.model");
const isAuth= require("./middleware/auth");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello I am learning from Udemy Hitesh Choudhary course");
});

app.post("/register", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    if (!(email && password && firstname && lastname)) {
      res.status(400).send("All fiels are required");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(401).send("User already exist");
    }
    let myEncPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: myEncPassword,
    });
    //token creation
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.SECRET_KEY,
      {
        expiresIn: "4h",
      }
    );
    user.token = token;
    //update or not in DB

    //password handlenling
    user.password = undefined;

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("Email or password are wrong");
    }
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.SECRET_KEY,
        { expiresIn: "4h" }
      );
      user.token = token;
      user.password = undefined;
      res.status(200).json(user);
    }
    res.send(400).send("email or password is incorrect");
  } catch (error) {
    console.log(error);
  }
});


app.get('/dashboard',isAuth,(req,res)=>{
    res.send('Welcome to secret information')
})

module.exports = app;
