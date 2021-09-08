import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Paciente from "../typeorm/entities/paciente";
import PacienteRepository from "../typeorm/repositories/PacienteRepository";

interface IRequest{
    id:string;
}
export default class DeletePatientService{
    public async execute({id}:IRequest):Promise<Paciente>{
        const pacienteRepository = getCustomRepository(PacienteRepository);
        const paciente = await pacienteRepository.findOne(id);
        if(paciente){
            await pacienteRepository.remove(paciente);
            return paciente;
        }else{
            throw new AppError("Patient not found.");
        }
    }
}