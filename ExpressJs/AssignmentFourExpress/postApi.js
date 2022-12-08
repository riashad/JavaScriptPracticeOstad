//Importing Necessary Modules
const expressJs = require('express'); //required for Running express server
const bodyParser = require('body-parser'); //required for parsing JSON data

//Instances
const app = expressJs();
const port  = 8000;

//using Body Parser for the application
app.use(bodyParser.json());

//using Application Level Middleware
app.use((req, res, next)=>{
	//Request--->Next()--->Response
	console.log("Application level middleware is applied!");
	let timestamp = Date.now();
	let today = new Date(timestamp);
	console.log(today.toDateString());
	next();
});

//POST API - URL Query, Header, Body
app.post('/',(req, res)=>{
	//URL Query
	let fullName = req.query.name;
	let emailAdd = req.query.mail;

	//Header
	let author = req.header('author');
	let platform = req.header('platform');
	let userip = req.header('userip');
	let userAgent = req.header('device');

	//Body
	let JsonData = req.body;
	let makeString = JSON.stringify(JsonData);

	res.send('Playing with POST API: URL Query, Body Data and Header \n \n ' +
		'URL Query \n Full Name: '+fullName+' and Email: '+emailAdd+' \n\n' +
		'Header \n Author: '+author+' , Learning Platform: '+platform+' , User Ip: '+userip+' & User Device: '+userAgent +'\n\n' +
		'Body JSON Data: \n'+ makeString+'\n\n')
	res.status(200).end();
});

//Setting & Clearing Cookies
app.get('/', (req, res)=>{
	res.cookie("userid",'01');
	res.cookie("salt",'9Y$RE`@qf!-Rjfrhno2^f} wqne7B+rLw+vH}~n0$8jq@_|=zx~BTP4iBN8qrj7t');
	res.cookie("userAgent",'osx');

	res.status(201).end("Cookies set successful!");
});
//Cookies will be displayed as long as we don't clear the set cookies

app.get('/clearCookies', (req, res)=>{
	res.clearCookie("userid",'01');
	res.clearCookie("salt",'9Y$RE`@qf!-Rjfrhno2^f} wqne7B+rLw+vH}~n0$8jq@_|=zx~BTP4iBN8qrj7t');
	res.clearCookie("userAgent",'osx');

	res.status(201).end("Cookies clear successful!");
});

//listening
app.listen(port, ()=>{
	console.log(`Successfully connected to http://localhost:${port}`)
});

