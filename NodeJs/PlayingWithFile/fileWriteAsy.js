let http = require('http');
let fs = require('fs');
let port = 5050;
let dataToWriteInFile = 'Hello world file written in Asynchronous Way. And now I am bring overwritten!!';

http.createServer(function (asho, jao){
	if (asho.url == "/"){
		jao.writeHead(200, {"Content-type":"text/html"});
		jao.write(`I we are in home page, visitable page is http://127.0.0.1:${port}/writefile`);
		jao.end();
	}else if(asho.url == "/writefile"){
		// Write file using Async Way -- Callback function needed
		// File gets overwritten every time we request for write, changing the data will show the output
		fs.writeFile('dummy1.txt',dataToWriteInFile,function (error){
			if (error){
				jao.writeHead(200, {"Content-type":"text/html"});
				jao.write("File write unsuccessful!");
				jao.end();

			}else{
				jao.writeHead(200, {"Content-type":"text/html"})
				jao.write("File write Successful!");
				jao.end();
			}
		});
	}
}).listen(port);

console.log(`Server started successfully @ http://127.0.0.1:${port}`);