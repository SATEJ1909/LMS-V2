import { signup , login } from "../controller/user.controller.js";
import { Router } from "express";

const UserRouter = Router();

UserRouter.post("/signup" , signup);
UserRouter.post("/login" , login);




export default UserRouter;