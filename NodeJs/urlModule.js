//importing modules
let http = require('http');
let urrl = require('url');

let server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-type':'text/html'});
	res.write("<h1> Welcome to Node Js Server</h1>");

	let myUrl = "https://riashad.net/index.php?id=1&year=2022&month=11";
	let urlObj = urrl.parse(myUrl,true); //url vangbe and object create korbe

	let hostName = urlObj.host;
	let pathName = urlObj.pathname;
	let searchName = urlObj.search;
	res.write(`Hostname: ${hostName} </br> Pathname: ${pathName} </br> Search Query: ${searchName}`);
	res.end();
});

server.listen(8899);
console.log("Server successfully loaded at: http://127.0.0.1:8899");