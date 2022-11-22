const { MongoClient } = require("mongodb"); // importing mongodb
require('dotenv').config(); // importing dotenv file

// Create a new MongoClient
// getting connection uri from .env file
//Local db
const client_local = new MongoClient(process.env.DATABASE_LOCAL);
// remote db from atlas
const client_remote = new MongoClient(process.env.DATABASE_REMOTE);

if(!client_local){
	console.log("local connection failed");
}else{
	console.log("local connection success");
}

if(!client_remote){
	console.log("remote connection failed");
}else{
	console.log("remote connection success");
}

module.exports = {client_local}; // exporting named module
module.exports = {client_remote}; // exporting named module
