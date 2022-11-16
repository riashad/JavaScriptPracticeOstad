//Importing HTTP and FS Modules
let http = require('http');
let fileSystem = require ('fs');

//Optional Variables
let port = 5050;
let fileToDelete = "dummy1.txt"; // previously created files dummy1.txt, dummy2.txt, dummy3.txt, dummy4.txt

//Creating Server
let server = http.createServer(function (request, response) {
	//Check url and go to that section
	if(request.url == "/") {
		//sending response 200 = OK to server
		response.writeHead(200, {"Content-type":"text/html"});
		// Reading file using Synchronous way - No Callback func needed
		let dataFromFile = fileSystem.readFileSync('index.html', 'utf-8');
		// to avoid raw Buffer data UTF-8 encoding is used
		response.end(dataFromFile);

	}else if(request.url == "/about") {
		//sending response 200 = OK to server
		response.writeHead(200, {"Content-type":"text/html"});
		let dataFromFile = fileSystem.readFileSync('about.html', 'utf-8');
		response.end(dataFromFile);

	}else if(request.url == "/skills") {
		//sending response 200 = OK to server
		response.writeHead(200, {"Content-type":"text/html"});
		let dataFromFile = fileSystem.readFileSync('skills.html', 'utf-8');
		response.end(dataFromFile);

	}else if(request.url == "/contact") {
		//sending response 200 = OK to server
		response.writeHead(200, {"Content-type": "text/html"});
		let dataFromFile = fileSystem.readFileSync('contact.html', 'utf-8');
		response.end(dataFromFile);

	}else if(request.url== "/policies") {
		//sending response 200 = OK to server
		response.writeHead(200, {"Content-type": "text/html"});
		let dataFromFile = fileSystem.readFileSync('terms-policy.html', 'utf-8');
		response.end(dataFromFile);

	}else if(request.url == "/delete") {
		//sending response 200 = OK to server
		response.writeHead(200, {"Content-type": "text/html"});
		response.write("File deleted successful! ")
		let deleteFile = fileSystem.unlinkSync(fileToDelete);
		response.end(deleteFile);

	}else{
		// If unknown url then will send 404
		//sending response 404 = Page Not Found to server
		response.writeHead(404, {"Content-type":"text/html"});
		response.write(`404 - Page not found \n Try the following link http://localhost:${port}`);
		response.end()
	}

});

server.listen(port);
console.log(`Server run successful! at http://localhost:${port} or http://127.0.0.1:${port}`);