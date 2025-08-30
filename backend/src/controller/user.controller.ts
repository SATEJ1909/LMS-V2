import jwt from "jsonwebtoken"
import type { Request, Response } from "express";
import prisma from "../prisma.js";
import bcrypt from "bcrypt"


export const signup = async (req: Request, res: Response) => {
     try {
        const {name , email , password , role} = req.body;
        const existingUser = await prisma.user.findUnique({
             where : {
                email : req.body.email
             }
        })
        if(existingUser){
            return res.status(404).json({success : false , message : "User already exist"});
        }
        const hashedPassword = await bcrypt.hash(password , 10);
        const newUser = await prisma.user.create({
            data : {
                name,
                email ,
                password : hashedPassword,
                role
            }
        })
        const token = jwt.sign({
            id : newUser.id
        } , process.env.JWT_SECRET ?? "default-secret-key");

        return res.status(200).json({
            success : true ,
            message : "User Creaded Successfully",
            token
        })
     } catch (error : any) {
        console.log(error);
        return res.status(404).json({
            success : false ,
            message : error.message
        })
     }
}


export const login = async(req : Request , res : Response) =>{
    try {
        const {email , password} = req.body;
        
        const user = await prisma.user.findUnique({
            where : {
                email : req.body.email
            }
        })
        //@ts-ignore
        const isValidPass = await bcrypt.compare(password , user?.password);

        if(!isValidPass){
            return res.status(404).json({
                success : false , 
                message : "Invalid Password"
            })
        }

        const token = await jwt.sign({
            id : user?.id
        } , process.env.JWT_SECRET ?? "default-secret-key");



        return res.status(200).json({
            success : true , 
            message : "Login Successfully",
            token
        })

        
    } catch (error : any) {
        console.log(error);
        res.status(404).json({
            success : false , 
            message : error.message
        })
    }
}