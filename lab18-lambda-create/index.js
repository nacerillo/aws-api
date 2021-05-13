"use strict";

const uuid = require("uuid").v4;
const dynamoose = require("dynamoose");
const PeopleModel = require("./people.schema.js");

exports.handler = async (event) => {
  try {
    //get database from req.body
    const { name, number } = JSON.parse(event.body); // object destructuring

    const _id = uuid();
    const record = new PeopleModel({ _id, name, number });
    //save record to the DB in Dynamoose
    const data = await record.save();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      response: e.message,
    };
  }
};
