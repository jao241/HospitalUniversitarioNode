import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Paciente from "../typeorm/entities/paciente";
import PacienteRepository from "../typeorm/repositories/PacienteRepository";

interface IRequest{
    nome:string;
}
export default class ListOnePatientByNomeService{
    public async execute({nome}:IRequest):Promise<Paciente>{
        const pacienteRepository = getCustomRepository(PacienteRepository);
        const paciente = await pacienteRepository.findByName(nome);
        if(paciente){
            return paciente;
        }else{
            throw new AppError("Patient not found.");
        }
    }
}