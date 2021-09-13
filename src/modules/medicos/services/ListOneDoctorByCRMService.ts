import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Medico from "../typeorm/entities/Medico";
import MedicoRepository from "../typeorm/repositories/MedicoRepository";

interface IRequest{
    crm:string;
}
export default class ListOneDoctorByCRMService{
    public async execute({crm}:IRequest):Promise<Medico>{
        const medicoRepository = getCustomRepository(MedicoRepository);
        const medico = await medicoRepository.findByCRM(crm);
        if(medico){
            return medico;
        }else{
            throw new AppError("Doctor not found.");
        }
    }
}