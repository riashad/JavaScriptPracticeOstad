const  mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
	FirstName:      {type:String},
	LastName:       {type:String},
	EmailAddress:   {
		type:String,
		unique: true,
		required: true
	},
	MobileNumber:   {type:String},
	City:           {type:String},
	UserName:       {
		type:String,
		required: true,
		unique:true
	},
	Password:       {type:String},
},{
	versionKey:false
});

const profileModel = mongoose.model('Profile', DataSchema);



//Exporting for further use
module.exports = profileModel