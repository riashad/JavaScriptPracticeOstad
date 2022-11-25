const { MongoClient } = require("mongodb"); // importing mongodb
require('dotenv').config(); // importing dotenv file

// remote db from atlas
const client_remote = new MongoClient(process.env.DATABASE_REMOTE);

if(!client_remote){
	console.log("remote connection failed");
}else{
	console.log("remote connection success");
}

module.exports = {client_remote}; // exporting named module
