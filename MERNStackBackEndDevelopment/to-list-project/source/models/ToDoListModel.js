const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
	UserName:       {
		type:String
	},
	TSubject: {
		type: String,
		required: true
	},
	TDescription: {
		type: String
	},
	TCategory: {
		type: String,
		required:true,
		default: "All"
	},
	TStatus: {
		type:String,
		default: "New"
	},
	TCDate: { //To Do created Date
		type: Date
	},
	TUDate: { //To Do updated Date
		type: Date
	},
	TFDate: { //To Do Finished Date
		type: Date
	},
	TEDate: { //To Do Expired Date
		type: Date
	}
},{versionKey:false});

const ToDoListModel = mongoose.model('ToDoList', DataSchema);




module.exports = ToDoListModel;