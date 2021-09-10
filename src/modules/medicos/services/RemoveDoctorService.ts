import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Medico from "../typeorm/entities/Medico";
import MedicoRepository from "../typeorm/repositories/MedicoRepository";

interface IRequest{
    id:string;
}
export default class RemoveDoctorService{
    public async execute({id}:IRequest):Promise<Medico>{
        const medicoRepository = getCustomRepository(MedicoRepository);
        const medico = await medicoRepository.findOne(id);
        if(medico){            
            await medicoRepository.remove(medico);
            return medico;
        }else{
            throw new AppError("Doctor not found.");
        }
    }
}