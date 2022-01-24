"use strict";
const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");
const { ObjectID } = require("mongoose/lib/schema/index");
const reviewsSchema = mongoose.Schema({
  hotelName: {
    type: String,
  },
  userName:{
    type: String,
  },
  comment:{
    type: String,
  },
  rate: {
    type: Number,
  }
});
module.exports = mongoose.model("Review", reviewsSchema );
