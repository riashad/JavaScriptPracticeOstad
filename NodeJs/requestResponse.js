//Importing http module
let http = require('http');

//Creating Server
http.createServer(function (request, response){
	if(request.url == "/"){
		response.writeHead(200, {'Content-type': 'text/html'});
		response.write("<h1>I am in Homepage</h1>");
		response.end();
	}else if(request.url == "/about") {
		response.writeHead(200, {'Content-type': 'text/html'});
		response.write("<h1>I am in About Page</h1>");
		response.end();

	} else if (request.url == "/contact") {
		response.writeHead(200, {'Content-type': 'text/html'});
		response.write("<h1>I am in Contact Page</h1>");
		response.end();
	}else {
		response.writeHead(404,{'Content-type': 'text/html'});
		response.end('404 page Not Found!')
		response.end();
	}
}).listen(8005);

console.log("Server running successfully!")