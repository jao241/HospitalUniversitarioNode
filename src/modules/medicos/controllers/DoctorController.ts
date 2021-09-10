import { Request, Response } from "express";
import Medico from "../typeorm/entities/Medico";

export default class DoctorController{
    public async create(request:Request, response:Response):Promise<Medico>{
        
    }
}