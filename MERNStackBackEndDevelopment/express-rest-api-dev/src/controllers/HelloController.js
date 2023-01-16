exports.HelloGet = (req, res) => {
	res.status(200).json({
		status: "get method success",
		data: "Hello, this is my first express js API"
	});
}

exports.HelloPost = (req, res) => {
	res.status(200).json({
		status: "post method success",
		data: "Hello, this data is from Post Method API"
	});
}