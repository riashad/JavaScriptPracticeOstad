//Make a file Download API, that can download file from application directory

//Importing Modules
const express = require('express');
const app = express();

//Assign path and port
const port = 8000;


//Download Response
app.get('/', (req, res)=> {
	let folderName = 'uploads';
	// let fileName = 'download_file.txt';
	let fileName = 'wallpaper-3.jpg';

	res.status(200);

	const downloadPath = __dirname+'/'+folderName+'/'+fileName; //__dirname gives root directory path
	res.download(downloadPath,(err)=>{
		console.log('Download failed!\n' + err);
	});
})


//Listening
app.listen(port,()=>{
	console.log(`Successfully connected to http://localhost:${port}`);
});
