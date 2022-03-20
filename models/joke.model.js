// 3
const mongoose = require("mongoose");

// create schema
const JokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: [true, "Setup is required."],
    minlength: [10, "Setup must be at least 10 characters."],
  },
  punchline: {
    type: String,
    required: [true, "Punchline is required"],
    minlength: [3, "Punchline must be at least 3 characters."],
  },
  funnyLevel: {
    type: Number,
    min: [0, "Number cannot be negative"],
  },
}, {timestamps: true});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
