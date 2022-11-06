const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String },
});

const user = mongoose.model("User", Schema);
module.exports = user;
