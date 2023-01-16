const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
	let Token = req.headers['token-key'];

	jwt.verify(Token, "Bangladesh1971", function (err, decoded) {
		if(err){
			res.status(401).json({
				status:"Unauthorized"
			})
		}else{
			//Get username from decoded token and add with request header
			let username = decoded['data']['UserName']; //Data -> Username ke decode korbe
			req.headers.username = username;
			next();
		}
	});
}