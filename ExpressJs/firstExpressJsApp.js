const express = require('express'); // importing express js
const app = express(); // calling express
const port = 3000; //assigning port

//Running Express Server
app.get('/', (req, res)=>{
	res.send("Hello, from Express Js");
});

app.listen(port, ()=>{
	console.log(`Visit page at ${port}`);
});