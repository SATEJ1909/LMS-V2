import { signup , login , purchaseCourse ,getProfile  , getAllCourses} from "../controller/user.controller.js";
import { Router } from "express";
import { authenticate , authorize } from "../middleware/auth.js";

const UserRouter = Router();

UserRouter.post("/signup" , signup);
UserRouter.post("/login" , login);
UserRouter.post("/purchase" , authenticate , authorize("USER") , purchaseCourse);
UserRouter.get("/profile" , authenticate , authorize("USER" , "ADMIN" , "INSTRUCTOR") , getProfile);
UserRouter.get("/courses" , authenticate , authorize("USER" , "ADMIN" , "INSTRUCTOR") , getAllCourses);



export default UserRouter;