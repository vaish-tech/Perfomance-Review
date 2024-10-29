// JavaScript source code
const mongoose = require("mongoose");

// Define the MongoDB connection URI (you can change this URI to match your database setup)
const mongoURI = "mongodb://localhost:27017/performance_reviews";

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Event listeners for MongoDB connection
mongoose.connection.on("connected", () => {
  console.log("Successfully connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err);
});

// Export the mongoose connection
module.exports = mongoose;


