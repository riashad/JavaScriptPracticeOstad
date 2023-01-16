const ProfileModel = require("../models/ProfileModel");
const jwt = require('jsonwebtoken');

//User Registration
exports.CreateProfile = (req,res) => {
	let reqBody=req.body;
	ProfileModel.create(reqBody,(err,data)=>{
		if(err){
			res.status(400).json({
				status:"failed",
				data:err
			})
		}
		else {
			res.status(200).json({
				status:"success",
				data:data
			})
		}
	})
}

//User Login
exports.UserLogin = (req,res) => {
	let username = req.body['UserName'];
	let password = req.body['Password'];

	ProfileModel.find({Username:username,Password:password},(err,data)=>{
		if(err) {
			res.status(404).json({
				status:"Not Found",
				data:err
			})
		}else{
			if(data.length > 0){
				//Create Auth Token
				let payload = {
					exp: Math.floor(Date.now() / 1000) + (24*60*60),
					data: data[0]
				};
				let token = jwt.sign(payload, 'Bangladesh1971')

				res.status(200).json({
					status:"success",
					token:token,
					data:data
				})
			}else {
				res.status(401).json({
					status:"Unauthorized"
				})
			}
		}
	})

}

//Select Profile
exports.SelectProfile = (req, res) => {
	let username = req.headers['username'];
	ProfileModel.find({UserName:username}, (error, result) => {
		if(error){
			res.status(400).json({
				status:"failed",
				data:error
			})
		}
		else {
			res.status(200).json({
				status:"success",
				data:result
			})
		}
	})
}

//Update Profile
exports.UpdateProfile = (req, res) => {
	let username = req.headers['username'];
	let reqBody = req.body;

	ProfileModel.updateOne({UserName:username}, {$set:reqBody}, {upsert:true}, (error, result) => {
		if(error){
			res.status(400).json({
				status:"Not Updated",
				data:error
			});
		}else{
			res.status(200).json({
				status:"Data Updated",
				data:result
			})
		}
	});
}

//Delete Profile
exports.DeleteProfile = (req, res) => {
	let username = req.headers['username'];

	ProfileModel.findOneAndDelete({UserName:username},(error, data) => {
		if(error){
			res.status(400).json({
				status:"delete failed",
				data:error
			})
		}
		else {
			res.status(200).json({
				status:"delete success",
				data:data
			})
		}
	});
}