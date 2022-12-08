//Response has 4 parts
/*
	1. Response Body
	2. Response Header
	3. Response Status
	4. Response Cookies

 */

/*
	Response GET/POST Requests
	1. String Response
	2. Response Status code
	3. JSON Response
	4. Download Response
	5. Response Redirect
	6. Response Header
	7. Set Response Cookies
	8. Clear Response Cookies

	To test we will use Postman
*/

const express = require('express');
const app = express();
const port = 8088;

//Routing

//Simple Sting response
app.get('/one', (req, res)=>{
	// res.send('Hello, I am body message');
	res.end("I am closing message");
});

app.post('/two', (req, res)=>{
	res.send('Hello, this is a simple string response');
});

//Sending Status code
app.get('/three', (req, res)=>{
	res.status(404).end("Page Not Found!");
})

//Sending JSON Response
app.get('/four', (req, res)=>{
	let myJsonArray = [
		{
			name: "Riashad",
			city: "Dhaka",
			occupation: "Engineering"
		},
		{
			name: "Uzan",
			city: "Dhaka",
			occupation: "Artist"
		},
		{
			name: "Utshab",
			city: "Dhaka",
			occupation: "Photographer"
		},
		{
			name: "Tishad",
			city: "Dhaka",
			occupation: "Student"
		},
		{
			name: "Rasheeq",
			city: "Dhaka",
			occupation: "Manager"
		},
		{
			name: "Sazid",
			city: "Dhaka",
			occupation: "System Support"
		}
	];
	//JSON Array pass hobe

	res.json(myJsonArray);
})

//Download Response
app.get('/five', (req, res)=> {
	let downloadPath = "./uploads/image1.jpg";
	res.download(downloadPath,(err)=>{
		console.log(err, 'Download failed!');
	});
})

//Response Redirect
app.get('/six', (req, res)=>{
	let redirectPath = '/four';
	res.redirect(redirectPath);
});

// Response Header
app.get('/seven', (req, res)=>{

	res.append("author","Riashad Noor");
	res.append("country","Bangladesh");
	res.append("project","MERN Learning");
	res.append("platform","Ostad");

	res.send("Playing with Response Header");
	res.status(201).end();
});

// Set Response Cookies

app.get('/eight', (req, res)=>{
	res.cookie("author","Riashad Noor");
	res.cookie("country","Bangladesh");
	res.cookie("project","MERN Learning");
	res.cookie("platform","Ostad");
	res.cookie("secret", "a:! 9d_[yJFmUhcwUkI+a+S<Y?EW5:z6t/p28s7jA*KN7;@(&S:]RKYnXt|pYkII");

	res.status(201).end("Cookies set successful!");
});

// Response Clear Cookie
app.get('/nine', (req, res)=>{

	res.clearCookie("project","MERN Learning");
	res.clearCookie("platform","Ostad");

	res.status(201).end("Cookies set successful!");
});


//Listing to the assigned port
app.listen(port, ()=>{
	console.log(`Server is running at http://localhost:${port}`)
})