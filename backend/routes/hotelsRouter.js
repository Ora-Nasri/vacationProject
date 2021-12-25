"use strict";
const express = require("express");
const router = express.Router();
const hotels = require("../models/hotels");

router.get('/', async (req, res) => {
  const hotel = await hotels.find().exec();
  res.json(hotel);
})

// get  hotel by id
router.get("/:id", async (req, res) => {
  const hotel = await hotels.findById(req.params.id).exec();
  res.send(hotel);
  console.log(req.params.id + "was founded");
});

//create new hotel
router.post("/", async (req, res) => {
  const newHotel = await hotels.create(req.body);
  console.log(newHotel + "was created");
  res.send(newHotel);
});

//update name of hotel by id
router.put("/:id", async (req, res) => {
  const updetedHotel = await hotels.findByIdAndUpdate(req.params.id, req.body).exec();
  res.json(updetedHotel);
});

//delete person by id
router.delete("/:id", async (req, res) => {
  const deletedHotel = req.params.id;
  hotels.findByIdAndDelete(deletedHotel).exec();
  res.json(deletedHotel +" hotel is deleted!");
  console.log(deletedHotel + "was deleted");
});

module.exports = router;
