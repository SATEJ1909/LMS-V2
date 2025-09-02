import type{ Request , Response } from "express";
import prisma from "../prisma.js";

export const getAllUsers = async(req : Request , res : Response) => {
    try {
        const users = await prisma.user.findMany({});

        return res.status(200).json(users);

    } catch (error : any) {
        console.log(error);
        return res.status(404).json({success : false , message : error.message})
    }
}