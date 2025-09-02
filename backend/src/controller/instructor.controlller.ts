import type { Request , Response , NextFunction } from "express"
import prisma from "../prisma.js";

export const createCourse = async(req : Request , res : Response) => {
    try {
        const { title , description , thumbnail , price } = req.body;

        const course = await prisma.course.create({
            data : {
                title,
                description,
                thumbnail,
                price,
                instructor : {
                    connect : {
                        id: req.userId ? Number(req.userId) : 0 
                    }
                }
            }
        })

        return res.status(200).json({
            success : true , 
            message : "Course Created Successfully",
            course
        })
    } catch (error : any) {
        console.log(error);
        return res.status(404).json({
            success : false , 
            message : error.message
        })
    }
}

export const updateCourse = async (req : Request , res : Response) => {
    try {
        const {title , description , thumbnail , price , courseId} = req.body;

        const course = await prisma.course.update({
            where : {
                id : courseId
            },
            data : {
                title,
                description,
                thumbnail,
                price
            }
        })

        return res.status(200).json({
            success : true , 
            message : "Course Updated Successfully",
            course
        })
    } catch (error : any) {
        console.log(error);
        return res.status(404).json({
            success : false , 
            message : error.message
        })
    }
}


export const deleteCourse = async (req : Request , res : Response) => {
    try {
        const {courseId} = req.body;

        const course = await prisma.course.delete({
            where : {
                id : courseId
            }
        })
        return res.status(200).json({
            success : true , 
            message : "Course Deleted Successfully",
            course
        })
    } catch (error : any) {
        
    }
}