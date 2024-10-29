// JavaScript source code
const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// Get Reviews for an Employee
router.get("/reviews/:employeeId", async (req, res) => {
  const reviews = await Review.find({ reviewee: req.params.employeeId });
  res.json(reviews);
});

// Submit Feedback
router.post("/feedback", async (req, res) => {
  const { reviewId, feedback } = req.body;
  const review = await Review.findByIdAndUpdate(reviewId, { feedback }, { new: true });
  res.json(review);
});

module.exports = router;

