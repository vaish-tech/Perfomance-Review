// JavaScript source code
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  feedback: String,
  reviewer: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  reviewee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
});

module.exports = mongoose.model("Review", reviewSchema);

