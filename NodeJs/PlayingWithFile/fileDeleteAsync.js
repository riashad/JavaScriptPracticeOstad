let http = require('http');
let fs = require('fs');

let port = 5500;
let filePath = 'delete1.txt'
let server = http.createServer(function (req, res){

	//Check file exists or not Async
	fs.exists(filePath, function (result){
		if(result){
			console.log("True");
			//Deleting file in Async Way
			fs.unlink(filePath, function (error){
				if(error){
					res.writeHead(200, {"Content-type":"text/html"});
					res.write("file deleted unsuccessful");
					res.end();
				}else{
					res.writeHead(200, {"Content-type":"text/html"});
					res.write("file deleted successful");
					res.end();
				}
			});
		}else{
			console.log("False");
		}
	});
});

server.listen(port);
console.log(`Server run successful and open at http://127.0.0.1:${port}`);