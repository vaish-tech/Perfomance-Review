// JavaScript source code
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});

module.exports = mongoose.model("Employee", employeeSchema);

