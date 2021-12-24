"use strict";
const mongoose = require("mongoose");
const hotelsSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  location:{
      type: String,
  }
});
module.exports = mongoose.model("Hotel", hotelsSchema );
