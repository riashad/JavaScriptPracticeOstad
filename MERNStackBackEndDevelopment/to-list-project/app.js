//Importing Packages

//Core
const express =require('express');
const router =require('./source/routes/api');
const bodyParser =require('body-parser');
const path = require('path');


const app = new express(); // Express Instance

//Security
const rateLimiter =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const xssClean =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');

//Database library import
const mongoose = require('mongoose');

//Implementing Security Middlewares
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xssClean());
app.use(hpp());

//Implementing JSON Data using Body Parser
app.use(bodyParser.json());

//RateLimiting - Requests from specific IP
const limiter = rateLimiter({
	windowMs: 10*60*1000, //10 min
	max: 1500 //request numbers
});
app.use(limiter);

//Database Connection
//Using MongoDB Atlas Cluster
const DB_URL = "mongodb+srv://riashad:Ostad%402022@cluster0.fnjwco8.mongodb.net/ToDoApplication?retryWrites=true&w=majority";
const OPTION = {user: '', pass: '', autoIndex:true};
mongoose.connect(DB_URL,OPTION,(err)=>{
	console.log("Connection Successful")
	console.log(err)
})

// Implementing Route
app.use("/api/v1",router)


//Undefined paths
app.use("*",(req,res)=>{
	res.status(404).json({
			status:"failed",
			data:"Not Found"
		});
});



//Exporting Module
module.exports=app;
