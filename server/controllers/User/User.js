const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: String,
  age: Number,
  isLame: Boolean,
  bacon: {
    type: Number,
    required: [true, "Why no bacon?"],
    min: [1, "what do you have against bacon?"],
    max: [6, "don't get greedy"]
  }
});

module.exports = mongoose.model("User", User);
