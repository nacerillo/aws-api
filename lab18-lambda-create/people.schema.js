"use strict";

const dynamoose = require("dynamoose");

const peopleSchema = new dynamoose.Schema({
  _id: String,
  name: String,
  number: String,
});

module.exports = dynamoose.model("people", peopleSchema);
