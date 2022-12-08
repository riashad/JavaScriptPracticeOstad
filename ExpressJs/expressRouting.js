const express = require('express');
const app = express();
const port = 8000;

//Routing
app.get('/', (req, res)=>{
	res.send("Welcome to Homepage!");
});

app.get('/about', (req, res)=>{
	res.send("Welcome to About Page!");
});

app.get('/contacts', (req, res)=>{
	res.send("Welcome to Contact Us Page!");
});

app.get('/terms', (req, res)=>{
	res.send("Welcome to Terms & Conditions Page!");
});

app.post('/uppost', (req, res)=>{
	res.send("Welcome to Terms & Conditions Page!");
});

app.put('/putpost', (req, res)=>{
	res.send("Welcome to Terms & Conditions Page!");
});

app.delete('/deletepost', (req, res)=>{
	res.send("Welcome to Terms & Conditions Page!");
});

//listening to the assigned port

app.listen(port, ()=>{
	console.log(`Server is running successfully at http://localhost:${port}`);
});


