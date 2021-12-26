"use strict";
const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");
const { ObjectID } = require("mongoose/lib/schema/index");
const hotelsSchema = mongoose.Schema({
  name: {
    type: String,
  },
  location:{
    type: String,
  },
  stars:{
    type: Number,
  },
  type: {
    type: Boolean,
  },
  adult_price: {
    type: Number,
  },
  young_price: {
    type: Number,
  },
  bads: {
    type: Number,
  },
  text:{
      type: String,
  }
});
module.exports = mongoose.model("Hotel", hotelsSchema );
