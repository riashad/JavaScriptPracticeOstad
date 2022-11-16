let http = require('http');
let fs = require('fs');
let port = 6060;
let filePath = "dummy2.txt"; // previously created files dummy1.txt, dummy2.txt, dummy3.txt, dummy4.txt

http.createServer(function (dako, pathao){

	if(dako.url == "/"){
		//sending response 200 = OK to server
		pathao.writeHead(200, {"Content-type":"text/html"});
		// Reading file using Asynchronous way -  Callback func needed
		// to avoid raw Buffer data UTF-8 encoding is used
		fs.readFile('index.html','utf-8', function (err, data){
			pathao.writeHead(200, {"Content-type":"text/html"});
			pathao.write(data);
			pathao.end();
		});

	}else if(dako.url == "/about") {
		pathao.writeHead(200, {"Content-type":"text/html"});
		fs.readFile('about.html','utf-8', function (err, data){
			pathao.writeHead(200, {"Content-type":"text/html"});
			pathao.write(data);
			pathao.end();
		});

	}else if(dako.url == "/skills"){
		pathao.writeHead(200, {"Content-type":"text/html"});
		fs.readFile('skills.html','utf-8', function (err, data){
			pathao.writeHead(200, {"Content-type":"text/html"});
			pathao.write(data);
			pathao.end();
		});

	}else if(dako.url == "/contact"){
		pathao.writeHead(200, {"Content-type":"text/html"});
		fs.readFile('contact.html','utf-8', function (err, data){
			pathao.writeHead(200, {"Content-type":"text/html"});
			pathao.write(data);
			pathao.end();
		});

	}else if(dako.url == "/policies"){
		pathao.writeHead(200, {"Content-type":"text/html"});
		fs.readFile('terms-policy.html','utf-8', function (err, data){
			pathao.writeHead(200, {"Content-type":"text/html"});
			pathao.write(data);
			pathao.end();
		});

	}else if(dako.url == "/delete"){

		//Check file exists or not Async
		fs.exists(filePath, function (result){
			if(result){
				console.log("True");
				//Deleting file in Async Way
				fs.unlink(filePath, function (error){
					if(error){
						pathao.writeHead(200, {"Content-type":"text/html"});
						pathao.write("file deleted unsuccessful");
						pathao.end();
					}else{
						pathao.writeHead(200, {"Content-type":"text/html"});
						pathao.write("file deleted successful");
						pathao.end();
					}
				});
			}else{
				console.log("False");
			}
		});

	}else{
		// If unknown url then will send 404
		//sending response 404 = Page Not Found to server
		pathao.writeHead(404, {"Content-type":"text/html"});
		pathao.write(`404 - Page not found \n Try the following link http://localhost:${port}`);
		pathao.end()
	}

}).listen(port);

console.log(`Server run successful! at http://localhost:${port} or http://127.0.0.1:${port}`);