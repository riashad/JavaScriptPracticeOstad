//To run node server we need http server
//server run korar jonne server ke import korte hobe

let http = require('http'); // core module calling

//Creating Server using http createServer() module
//Every server receives Requests and sends Responses
// Request listener or callback anonymous function er through Req and Res kaj korbe
let server = http.createServer(function (request, response) {
	//Response Head
	// Send http header, send code 200, content type plain text
	response.writeHead(200, {'Content-Type': 'text/plain'});
	//Response Body
	response.write("<h2>Hello Good People</h2>");
	response.end();
});

server.listen(8001); // port to show this message of local server
console.log("server will be running at http://127.0.0.1:8001 or http://localhost:8001/") // 3333 port diye server run hobe

// Server Responses
// ✅ Status Code
	// 👉 Status Code Meaning:
	// 👉 "2xx": Server Ok / Successfully Running | 200-OK
	// 👉 "3xx": Redirection  | 301-Moved permanently | 307- temporary redirect | 308 - Permanently Redirected
	// 👉 "4xx": Client Error | 400-Bad Request | 404-Not Found | 403-Forbidden
	// 👉 "5xx": Server Error | 500-Internal Server Error | 503-Service Unavailable
// ✅ Data
	// 👉 Head: used for sensitive data
	// 👉 Body: used for general data

