import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import "express-async-errors";
import routes from "./routes";
import AppError from "../errors/AppError";
import "../typeorm";

const app = express();
const port = 3333;
app.use(cors());
app.use(express.json());
app.use(routes);
app.use((error:Error, request:Request, response:Response, next:NextFunction)=>{
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: error.statusCode,
            message: error.mensage
        });
    }
    return response.status(500).json({
        status: "Error.",
        message: "Internal Server Error."
    });
})
app.listen(port, ()=> console.log("Server on!"));