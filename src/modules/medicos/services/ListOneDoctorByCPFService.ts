import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Medico from "../typeorm/entities/Medico";
import MedicoRepository from "../typeorm/repositories/MedicoRepository";

interface IRequest{
    cpf:string;
}
export default class ListOneDoctorByCPFService{
    public async execute({cpf}:IRequest):Promise<Medico>{
        const medicoRepository = getCustomRepository(MedicoRepository);
        const medico = await medicoRepository.findByCPF(cpf);
        if(medico){
            return medico;
        }else{
            throw new AppError("Doctor not found.");
        }
    }
}