import 'express';

declare global {
    namespace Express {
        interface Request {
            instructorId?: string;
            userId?: string;
            adminId?: string;
        }
    }
}