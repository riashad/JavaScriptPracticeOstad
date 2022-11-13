let http = require('http');
let fs = require('fs');
let port = 5050;

let server = http.createServer(function (req, res){
	if(req.url == "/") {
		//File Rename using Sync Way
		let syncRename = fs.renameSync('dummy2.txt', 'dummy_sync_renamed.txt');
		if(syncRename){
			res.writeHead(200, {"Content-type":"text/html"});
			res.write("File Rename Un-Successful");
			res.end();
		}else{
			res.writeHead(200, {"Content-type":"text/html"});
			res.write("File Rename Successful");
			res.end();
		}
	}
});
server.listen(port);
console.log(`Server run successful http://127.0.0.1:${port}`);