let http = require('http');
let fs = require('fs');

let port = 5500;
let filePath = 'delete123.txt';
let server = http.createServer(function (req, res){

	if(req.url == "/") {
		// Checking if the file exists or not
		let checkExistence = fs.existsSync(filePath);
		if(checkExistence){
			console.log("True") // if available show True
			//Delete (unlink) using Sync way
			let deleteFile = fs.unlinkSync(filePath);
			if(deleteFile){
				res.writeHead(200, {"Content-type":"text/html"});
				res.write("file deleted unsuccessful");
				res.end();
			}else{
				res.writeHead(200, {"Content-type":"text/html"});
				res.write("file deleted successful");
				res.end();
			}

		}else{
			console.log("False"); // if not available show False
		}
	}
});

server.listen(port);
console.log(`Server run successful and open at http://127.0.0.1:${port}`);