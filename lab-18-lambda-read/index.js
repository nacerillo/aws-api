"use strict";

const uuid = require("uuid").v4;
const dynamoose = require("dynamoose");
const PeopleModel = require("./people.schema.js");

exports.handler = async (event) => {
  try {
    //  && === short circuting
    const _id = event.pathParameters && event.pathParameters._id;

    let data;

    if (_id) {
      // the below is the same as Mongoose -> .find({})
      const list = await PeopleModel.query("_id").eq(_id).exec();
      data = list[0];
    } else {
      data = await PeopleModel.scan().exec();
    }

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
