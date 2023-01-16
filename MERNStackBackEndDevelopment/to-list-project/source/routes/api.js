const express =require('express');
const ProfileController=require("../controllers/ProfileController");
const ToDoController=require("../controllers/TodoListController");
const UserVarMiddleware=require("../middleware/UserVarificationMiddleware");

const router =express.Router();

router.get("/", (req, res) => {
	res.status(200).json({
		status:"router working successfully",
		message:"Welcome to TO DO List API",
		data:"accessible paths: /registration /login /selectProfile"
	});
});

//User Profile Routers
router.post("/registration",ProfileController.CreateProfile);
router.post("/login",ProfileController.UserLogin);
router.get("/select-profile",UserVarMiddleware,ProfileController.SelectProfile);
router.post("/update-profile",UserVarMiddleware,ProfileController.UpdateProfile);
router.delete("/delete-profile",UserVarMiddleware,ProfileController.DeleteProfile);


//To Do List Routers
router.post("/create-todo",UserVarMiddleware, ToDoController.CreateToDo);
router.get("/select-todo",UserVarMiddleware,ToDoController.SelectToDo);
router.post("/update-todo",UserVarMiddleware,ToDoController.UpdateToDo);
router.delete("/delete-todo",UserVarMiddleware,ToDoController.DeleteToDo);
router.post("/update-todo-status",UserVarMiddleware, ToDoController.UpdateToDoStatus);
router.get("/select-todo-by-category",UserVarMiddleware, ToDoController.SelectToDoByCategory);
router.get("/select-todo-by-status",UserVarMiddleware, ToDoController.SelectToDoByStatus);
router.get("/select-todo-by-date",UserVarMiddleware, ToDoController.SelectToDoByDate);


module.exports = router;