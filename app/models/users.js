const mongoose = require("mongoose");
const { Schema, model, Types } = mongoose;
const validations = require('../validations');
const { validate } = require("./roles");


const userSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  passHash: { type: String, required: true },
  fName: { type: String, required: true /*validate: validateFirstName*/ },
  lName: { type: String, required: true /*validate: validateLastName*/ },
  email: {
    type: String,
    required: false,
    unique: true /*validate: validateEmail*/,
  },
  role: {type: Types.ObjectId, default: null},
  department: {type: Types.ObjectId, default: null},
  createdAt: { type: Date, default: Date.now },
});

const User = model("User", userSchema);
module.exports = User;
