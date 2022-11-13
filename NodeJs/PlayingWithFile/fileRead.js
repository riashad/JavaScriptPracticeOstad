let fs = require('fs');  // FS Module import
let http = require('http'); // HTTP Module Import
let port = 5050;
//to kill port use: kill -9 $(lsof -ti:8005)

let server = http.createServer(function (request, res){
	if(request.url == "/") {
		res.writeHead(200, {"Content-type": "text/html"});
		res.write("I am homepage");
		res.end();
	}else if(request.url == "/readAsync") {
		// Reading file using Asynchronous way - Callback func needed
		fs.readFile('readFile.html', function (err, data){
			res.writeHead(200, {"Content-type":"text/html"});
			res.write(data);
			res.end();
		});
	}else if(request.url =="/readSync"){
		// Reading file using Synchronous way - No Callback func
		let readSyncData = fs.readFileSync('readFile2.html');
		res.writeHead(200, {"Content-type":"text/html"});
		res.write(readSyncData);
		res.end();
	}
});

server.listen(port);
console.log(`Server run successful! at http://localhost:${port} and visitable links are \n http://localhost:${port}/readAsync \n http://localhost:${port}/readSync`);