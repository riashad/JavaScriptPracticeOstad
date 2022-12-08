//Importing Express
const expressJs = require('express');
//Importing Body Parser
const bodyParser = require("body-parser");
//Importing Multer
const multerForm = require('multer');

//Creating instances
let app = expressJs();
let port = 5050;
let multer = multerForm();

//using instances
app.use(bodyParser.json());
app.use(multer.array());
app.use(expressJs.static('public'));

//Multipart form data
app.post('/one', (req, res)=>{
	let jsonData = req.body;
	res.send(JSON.stringify(jsonData));
});

//JSON data
app.post('/two', (req, res)=>{
	let JsonData = req.body;
	let makeString = JSON.stringify(JsonData);
	res.send(makeString);
})

//Listening
app.listen(port,()=>{
	console.log(`Successfully connected to http://localhost:${port}`);
});