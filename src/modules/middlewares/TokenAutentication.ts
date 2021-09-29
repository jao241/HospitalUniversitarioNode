import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import Auth from "../../config/Auth";
import AppError from "../../shared/errors/AppError";

export default function autenticarToken(request:Request, response:Response, next: NextFunction):void{
    const bearerToken = request.headers.authorization;
    if(!bearerToken){
        throw new AppError("JWT token is missing.");
    }
    const [, token] = bearerToken.split(" ");
    try{
        const tokenVerificado = verify(token, Auth.secret);
        return next();
    }catch{
        throw new AppError("Invalid Token.");
    }
}