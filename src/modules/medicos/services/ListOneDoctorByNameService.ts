import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Medico from "../typeorm/entities/Medico";
import MedicoRepository from "../typeorm/repositories/MedicoRepository";

interface IRequest{
    nome:string;
}
export default class ListOneDoctorByNameService{
    public async execute({nome}:IRequest):Promise<Medico>{
        const medicoRepository = getCustomRepository(MedicoRepository);
        const medico = await medicoRepository.findByName(nome);
        if(medico){
            return medico;
        }else{
            throw new AppError("doctor not found.");
        }
    }
}