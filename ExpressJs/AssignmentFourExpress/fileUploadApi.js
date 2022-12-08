//Task: Make a file upload API support PNG,JPG file only

//importing necessary modules
const expressJs = require('express');
const multerModule = require('multer');

//Instantiation
let app = expressJs();
// let multer = multerModule();

//Assign port and path
let port = 8000;
let upload_directory = './uploads';
let timestamp =Date.now();
const maxSize = 2; //value in mb

//don't change - converting mb to byte
let uploadFileSize = maxSize * 1024 * 1024;


//using instances
app.use(expressJs.static('public')); //static('public') - helps to access the file directory publicly aka exposes the link to public

//Multer Disk Storage
let storage = multerModule.diskStorage({
	destination:(req, file, callback)=>{
		callback(null, upload_directory);
	},
	filename:(req, file, callback)=>{
		let filename = file.originalname.toLowerCase().split(' ').join('-');
		//Original name ke lowercase kore space remove kore dash(-) boshabe
		callback(null,filename); //file er original name nibe
	}
});

//File Filtration
let uploadImage = multerModule({
	storage:storage,
	limits: {fileSize:uploadFileSize},
	fileFilter:(req,file,callback)=>{
		if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg'){
			callback(null, true);
		}else{
			callback(null, false);
			// console.log("Only .png, .jpg & .jpeg format file is is allowed to upload! \n The file size must be: "+maxSize+" mb.");
			return callback(new Error("Only .png, .jpg & .jpeg format file is allowed to upload! \n The file size must be: "+maxSize+" mb."));
		}
	}
}).single('fileToUpload');

//Error handling
app.post('/', (req, res)=>{
	uploadImage(req,res,(error)=>{
		if(error){
			res.status(404).end("File upload failed!"+"\n "+error);
		}else{
			res.status(200).end("File uploaded successfully!")
		}
	});
});


//Listening
app.listen(port,()=>{
	console.log(`Successfully connected to http://localhost:${port}`);
});
