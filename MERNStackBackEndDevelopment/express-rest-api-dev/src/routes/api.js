//Calling Library and methods
const express = require('express');
const HelloController = require("../controllers/HelloController");
const router = express.Router(); //provides all http methods

//Routing
router.get("/hello-get", HelloController.HelloGet);
router.post("/hello-post", HelloController.HelloPost);

//Exporting Router so that App.js can access router
module.exports = router;
