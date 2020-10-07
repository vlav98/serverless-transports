"use strict";
const AWS = require("aws-sdk");

const docClient = new AWS.DynamoDB.DocumentClient();

// Function to Create an Item to DB
module.exports.addItem = async (event) => {
  try {
    let table = "Transport";

    let params = {
      TableName: transport,
      Item: {
        transportId: transportId,
        destination: destination,
        nom_de_ligne: nom_de_ligne,
      },
    };

    let result = await docClient.put(params).promise();
    if (result) {
      console.log(">>>>>>>>>", result);
    }

    console.log("hello world");
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Go Serverless v1.0! Your function executed successfully!",
        data: result,
      }),
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Function to getAllItems from DB
module.exports.getAllItem = async () => {
  let table = "Movies";
  let year = 2015;

  let title = "The Big New Movie";

  let params = {
    TableName: table,
    Key: {
      year: year,
      title: title,
    },
  };

  try {
    let result = await docClient.get(params).promise();

    console.log(result);

    return {
      body: JSON.stringify({
        message: "Executed succesfully",
        data: result,
      }),
    };
  } catch (error) {
    console.log(error);
  }
};

// Function to update an Item in DB
module.exports.updateItem = async () => {
  let table = "Movies";
  let year = 2015;

  let title = "The Big New Movie";

  let params = {
    TableName: table,
    Key: {
      year: year,
      title: title,
    },
    UpdateExpression: "set info.rating = info.rating + :val",
    ExpressionAttributeValues: {
      ":val": 1,
    },
    ReturnValues: "UPDATED_NEW",
  };

  try {
    let result = await docClient.update(params).promise();
    return {
      body: JSON.stringify({
        message: "updated succesfully",
        data: result,
      }),
    };
  } catch (error) {
    console.log(error);
  }
};

// Function to Delete an item
module.exports.deleteItem = async () => {
  let table = "Movies";
  let year = 2015;

  let title = "The Big New Movie";

  let params = {
    TableName: table,
    Key: {
      year: year,
      title: title,
    },
  };

  let result = await docClient.delete(params).promise();

  return {
    body: JSON.stringify({
      message: "deleted succesfully",
      data: result,
    }),
  };
};
