const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    default: null,
    required: true,
  },
  lastname: {
    type: String,
    default: null,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    values:[/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/],
    message:`Not of right format`
  },
  password: {
    type: String,
    required: true,
    min:[8,'Must be atleast 8 character long'],
    max:16,
  },
  token: {
    type: String,
  },
});

const userModel=mongoose.model('user',userSchema);

module.exports=userModel
