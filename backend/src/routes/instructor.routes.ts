import { authenticate , authorize } from "../middleware/auth.js";
import { Router } from "express";
import { createCourse , deleteCourse , updateCourse }  from "../controller/instructor.controlller.js";

const InstructorRouter = Router();

InstructorRouter.post("/create" , authenticate , authorize("INSTRUCTOR" , "ADMIN") , createCourse);
InstructorRouter.delete("/delete" , authenticate , authorize("INSTRUCTOR" , "ADMIN") , deleteCourse);
InstructorRouter.put("/update" , authenticate , authorize("INSTRUCTOR" , "ADMIN") , updateCourse);

export default InstructorRouter;