let http = require("http"); // importing HTTP Module
let fs = require("fs"); // importing FS Module

//Optional variable declaration for making life easier

let port = 5050;
let data = 'I am written in file using Synchronous Way. Again, and again';

//Creating Server
let server = http.createServer(function (req, res) {
	let output = fs.writeFileSync('dummy2.txt', data);
	if(req.url == "/"){
		res.writeHead(200, {"Content-type": "text/html"});
		res.write("I am in homepage");
		res.end()
	} else if(req.url == "/syncwritten") {
		if(output) {
			res.writeHead(200, {"Content-type": "text/html"});
			res.write("File written un-successful");
			res.end();
		}else{
			res.writeHead(200, {"Content-type": "text/html"});
			res.write("File written successful");
			res.end();
		}
	}
});



server.listen(port);
console.log(`Server started successfully @ http://127.0.0.1:${port}`);