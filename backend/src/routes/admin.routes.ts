import { authenticate , authorize } from "../middleware/auth.js";
import { getAllInstructor , getAllUsers } from "../controller/admin.controller.js";
import e from "express";
const { Router } = require("express");
const AdminRouter = Router();

AdminRouter.get("/users" , authenticate , authorize("ADMIN") , getAllUsers);
AdminRouter.get("/instructors" , authenticate , authorize("ADMIN") , getAllInstructor);

export default AdminRouter;

