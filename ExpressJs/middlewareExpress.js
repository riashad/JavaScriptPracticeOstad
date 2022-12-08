// Middleware - Bunch of codes of Security and functionality between Request and Response
// Request <---> Middleware <---> Response
// Two types of Middleware Placement: 1. Application Level,  2. Route Level
// Application Level Middleware: this middleware will work for the whole application for all the request and response
// Route Level Middleware: this middleware will work only on assigned routes/end points for specific request and response

const expressJs = require('express');
let app = expressJs();
let port = 5050;

/*
// Example: Application level middleware
app.use((req, res, next)=>{
	//request --->next()---->response
	console.log("Application level middleware is used!");
	next();
});

*/


// Example: Router level middleware
app.use('/about', (req, res, next)=>{
	console.log("About page based - route - middleware");
	next();
})
app.get('/', (req, res)=>{
	res.send("This is the homepage!");
});

app.get('/about', (req, res)=>{
	res.send("This is about page!");
});

app.get('/contact', (req, res)=>{
	res.send("This is contact page!")
});


app.listen(port, ()=>{
	console.log(`Successfully connected to http://localhost:${port}`);});