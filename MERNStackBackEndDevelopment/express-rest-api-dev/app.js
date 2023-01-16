const express = require('express');
const router = require("./src/routes/api"); //importing router module
const app = new express(); //instance of Express

//Security Middleware - always before Routing
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

//Security Middleware Implementation
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(cors());

//Request rate Limiting
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, //15 min
	limit: 100 // One IP can request for 100 times Max per WindowMs
});

app.use(limiter);


//we can create API version
app.use("/api/v1",router);

//Undefined Routes config - 404
app.use("*", (req,res) => {
	res.status(404).json({
		status: "failed",
		data: "Not Found"
	});
});


//Exporting to use in other js files
module.exports=app;
