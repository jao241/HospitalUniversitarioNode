import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Paciente from "../typeorm/entities/paciente";
import PacienteRepository from "../typeorm/repositories/PacienteRepository";

interface IRequest{
    cpf:string;
}
export default class ListOnePatientByCPFService{
    public async execute({cpf}:IRequest):Promise<Paciente>{
        const pacienteRepository = getCustomRepository(PacienteRepository);
        const paciente = await pacienteRepository.findByCPF(cpf);
        if(paciente){
            return paciente;
        }else{
            throw new AppError("Patient not found.");
        }
    }
}