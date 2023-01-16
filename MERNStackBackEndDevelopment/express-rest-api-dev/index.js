const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({path:'./config.env'}); //path


//Running Express Server
app.listen(process.env.RUNNING_PORT, () => {
	console.log("Successfully port using from env: "+process.env.RUNNING_PORT);
});