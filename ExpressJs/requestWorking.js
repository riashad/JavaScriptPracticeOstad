//Request Methods
/*
1. Post() -- most used
2. Get() -- most used
3. Put()
4. Delete()
*/



let express = require('express');
let bodyParser = require('body-parser');

let app = express(); // instance of Express
let port = 5055;

/*

===============
Get()
===============
1. Create simple get request
2. Simple get request with URL Parameter
3. Catch Request Header Simple Get Method

*/

//Simple Get Request
app.get('/', (req, res)=>{

	let firstName = req.query.firstName;
	let lastName = req.query.lastName;
	res.end(firstName+" "+lastName);
});

//Simple Header get method

app.get('/one', (req, res)=>{
	let firstName = req.header('firstName');
	let lastName = req.header('lastName');
	let userAgent = req.header('User-Agent');

	res.send(firstName+"\n "+lastName+" \n"+userAgent);
	res.status(200).end();
});


/*

===============
Post()
===============
1. Post Request
2. Request with URL Parameter
3. Request Header
4. Request JSON Body
5. Request Multipart Form Data
6. Request File Upload

*/

// 1. Simple Post Request

app.post('/two', (req, res)=>{
	res.end('This is simple post request');
});

// 2. Request with URL Parameter

app.post('/three',(req, res)=>{
	let fullName = req.query.name;
	let country = req.query.desh;
	res.end(fullName+" "+country);
});

//3. Request Header

app.post('/four',(req,res)=>{
	let username = req.header('userName');
	let email = req.header('userEmail');
	res.end(username+" "+email);
});

//4. Request JSON Body - body parser needed and need to do stringify

app.use(bodyParser.json()); //for parsing json application

app.post('/five', (req, res)=>{
	let jsonData = req.body;
	let makeString = JSON.stringify(jsonData);
	res.send(makeString);
});



//Listening
app.listen(port, ()=>{
	console.log(`Successfully connected to http://localhost:${port}`)
});