let http = require('http');
let fs = require('fs');
let port = 5050;

let server = http.createServer(function (req, res){
	if(req.url == "/") {
		//File Rename using Async Way
		fs.rename('dummy1.txt', 'dummy_async_renamed.txt', function (error){
			if(error){
				res.writeHead(200, {"Content-type":"text/html"});
				res.write("File Rename Un-Successful");
				res.end();
			}else{
				res.writeHead(200, {"Content-type":"text/html"});
				res.write("File Rename Successful");
				res.end();
			}
		});
	}
});

server.listen(port);
console.log(`Server run successful! check at http://127.0.0.1:${port}`);