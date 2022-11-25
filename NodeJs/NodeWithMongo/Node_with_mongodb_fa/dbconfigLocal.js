const { MongoClient } = require("mongodb"); // importing mongodb
require('dotenv').config(); // importing dotenv file

// Create a new MongoClient
// getting connection uri from .env file
//Local db
const client_local = new MongoClient(process.env.DATABASE_LOCAL);


if(!client_local){
	console.log("local connection failed");
}else{
	console.log("local connection success");
}


module.exports = {client_local}; // exporting named module
