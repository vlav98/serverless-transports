"use strict";
const AWS = require("aws-sdk");

const documentClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "Transport";

// Function to Create an Item to DB
module.exports.addItem = async (event, context) => {
  let params = {
    TableName: TABLE_NAME,
    Item: {
      transportId: context.awsRequestId,,
      destination: event.destination,
      nom_de_ligne: event.nom_de_ligne,
    },
  };

  try {
    const data = await documentClient.put(params).promise();
    console.log(data)
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Go Serverless v1.0! Your function executed successfully!",
        data: data,
      }),
    };
  }catch(err){
      console.log(err)
    return error;
  }
};

// Function to getAllItems from DB
module.exports.getAllItem = async (event) => {
  let params = {
    TableName: TABLE_NAME,
    Key: {
      destination: event.destination,
      nom_de_ligne: event.nom_de_ligne,
    },
  };

  try {
    const data = await documentClient.get(params).promise();
    console.log(data);

    return {
      body: JSON.stringify({
        message: "Executed succesfully",
        data: data,
      }),
    };
  } catch (error) {
    console.log(error);
  }
};

// Function to update an Item in DB
module.exports.updateItem = async (event) => {

  let params = {
    TableName: TABLE_NAME,
    Key: {
      destination: event.destination,
      nom_de_ligne: event.nom_de_ligne,
    },
    UpdateExpression: "set info.rating = info.rating + :val",
    ExpressionAttributeValues: {
      ":val": 1,
    },
    ReturnValues: "UPDATED_NEW",
  };

  try {
    const data = await documentClient.update(params).promise();
    return {
      body: JSON.stringify({
        message: "updated succesfully",
        data: data,
      }),
    };
  } catch (error) {
    console.log(error);
  }
};

// Function to Delete an item
module.exports.deleteItem = async (event) => {

  let params = {
    TableName: TABLE_NAME,
    Key: {
      destination: event.destination,
    },
  };

  const data = await documentClient.delete(params).promise();

  return {
    body: JSON.stringify({
      message: "deleted succesfully",
      data: data,
    }),
  };
};
