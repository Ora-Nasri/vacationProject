"use strict";
const express = require("express");
const router = express.Router();
const hotels = require("../models/hotels");

// get  hotel by id
router.get("/:id", async (req, res) => {
  const person = await people.findById(req.params.id).exec();
  res.send(person);
  console.log(req.params.id + "was founded");
});

//create new hotel
router.post("/", async (req, res) => {
  const newHotel = await people.create(req.body);
  console.log(newHotel + "was created");
  res.send(newHotel);
});

//update name of hotel by id
router.put("/:id", async (req, res) => {
  const updetedPerson = await people
    .findOneAndUpdate(req.params.id, { name: req.body.name })
    .exec();
  res.json(updetedPerson);
});

//delete person by id
router.delete("/:id", async (req, res) => {
  await people.deleteOne({ id: req.params.id }).exec();
  res.json("person is deleted!");
  console.log(req.params.id + "was deleted");
});

module.exports = router;
