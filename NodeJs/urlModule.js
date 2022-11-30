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

//server.listen(8899);
console.log("Server successfully loaded at: http://127.0.0.1:8899");

let url2 = "https://www.google.com/search?q=riashad+noor&rlz=1C5CHFA_enBD1015BD1015&oq=riashad+noor&aqs=chrome..69i57j69i64l3j69i61l3.4617j0j4&sourceid=chrome&ie=UTF-8";
let url2Obj = urrl.parse(url2, true);
// console.log(url2Obj);
let hostName = url2Obj.host;
let pathName = url2Obj.pathname;
let searchName = url2Obj.search;
console.log(hostName);
console.log(pathName);
console.log(searchName);

let query = url2Obj.query;
console.log("Q: ",query.q);
console.log("OQ: ",query.oq);
console.log("AQS: ",query.aqs);
console.log("Source Id: ",query.sourceid);
console.log("IE: ",query.ie);