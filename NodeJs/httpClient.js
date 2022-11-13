// ✅HTTP Client :
	// 👉Sends HTTP Request to Server
	// 👉Receives HTTP Responses
// Essential HTTP Client for JS: Axios, Fetch, jQuery AJAX, XML

// ✅HTTP Client Testing
	//👉 Postman
	//👉 Fiddler

/* Create a server and check in postman */

//1. Import http module
let http = require('http');

//create and listen server
let server = http.createServer(function (request, response) {	//Send http message
	response.writeHead(200, {'Content-Type': 'text/plain'});//response header message
	response.write('<p>Successfully opened website!</p>'); //response body
	response.end(); //Ending receiving response
});

server.listen(8002); // port to show this message of local server
console.log("server will be running at http://127.0.0.1:8002 or http://localhost:8002/") // 8002 port diye server run hobe

//If port is not free type this in cmd ----> kill -9 $(lsof -ti:8002)