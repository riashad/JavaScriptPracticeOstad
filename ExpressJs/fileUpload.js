//importing
const expressJs = require('express');
const multerForm = require('multer');
const bodyParser = require('body-parser');

//Instantiation
let app = expressJs();
let multer = multerForm();
let port = 6600;

//Using instances
app.use(expressJs.static('public'));

//Using Multer features
let storage = multerForm.diskStorage({
	destination:(req, file, callback)=>{
		let filePath = './uploads';
		callback(null,filePath);
	},
	filename:(req, file, callback)=>{
		callback(null,file.originalname);
	}
});

let upload = multerForm({storage:storage}).single('fileToUpload');

app.post('/three', (req, res)=>{
	upload(req,res,(err)=>{
		if(err){
			res.send("File upload failed!")
		}else{
			res.send("File uploaded successful!")
		}
	});
});

//Listening
app.listen(port, ()=>{
	console.log(`Successfully connected to http://localhost:${port}`);
})