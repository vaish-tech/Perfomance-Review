// JavaScript source code
const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");
const Review = require("../models/Review");

// Add Employee
router.post("/employees", async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.json(employee);
});

// View Employees
router.get("/employees", async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

// Assign Review
router.post("/assign-review", async (req, res) => {
  const { reviewerId, revieweeId, feedback } = req.body;
  const review = new Review({ reviewer: reviewerId, reviewee: revieweeId, feedback });
  await review.save();

  await Employee.findByIdAndUpdate(revieweeId, {
    $push: { reviews: review._id },
  });

  res.json(review);
});

module.exports = router;

