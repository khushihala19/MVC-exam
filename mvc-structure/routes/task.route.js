const { Router } = require("express")
const { getTask, createTask } = require("../controllers/user.controller")
const TaskRouter = Router()
userRouter.get("/",getTask)
userRouter.post("/",createTask)



module.exports=TaskRouter
