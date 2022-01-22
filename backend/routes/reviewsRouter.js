"use strict";
const express = require("express");
const router = express.Router();
const reviews = require("../models/reviews");
const  mongoose  = require("mongoose");


router.get('/', async (req, res) => {
  const review = await reviews.find().exec();
  res.json(review);
})


//create new hotel
router.post("/", async (req, res) => {
  const newReview = await reviews.create(req.body);
  console.log(newReview + "was created");
  res.send(newReview);
});




module.exports = router;