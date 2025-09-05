import type{ Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  id: number;
  role: "USER" | "INSTRUCTOR" | "ADMIN";
}

// Step 1: Authentication middleware
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.token;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    //@ts-ignore
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "default-secret-key") ;
   
    //@ts-ignore
    req.user = {
      id: decoded.id,
      role: decoded.role,
    };

    //console.log(decoded);

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

interface CustomRequest extends Request {
  user?: {
    id: number;
    role: "USER" | "INSTRUCTOR" | "ADMIN";
  };
}
// Step 2: Role-based authorization middleware
export const authorize =
  (...roles: ("USER" | "INSTRUCTOR" | "ADMIN")[]) =>
  (req: CustomRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };