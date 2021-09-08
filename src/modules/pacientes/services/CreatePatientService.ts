import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Paciente from "../typeorm/entities/paciente";
import PacienteRepository from "../typeorm/repositories/PacienteRepository";

interface IRequest{
    nome:string;
    genero:string;
    cor:string;
    cpf:string;
    data_nascimento:Date;
}
export default class CreatePatientService{
    public async execute({nome, genero, cor, cpf, data_nascimento}:IRequest):Promise<Paciente>{
        const pacienteRepository = getCustomRepository(PacienteRepository);
        const pacienteAlreadryExists = await pacienteRepository.findByCPF(cpf);
        if(pacienteAlreadryExists){
            throw new AppError("Already exists patient with this cpf.");
        }
        const newPaciente = pacienteRepository.create({
            nome,
            genero,
            cor,
            cpf,
            data_nascimento
        });
        await pacienteRepository.save(newPaciente);
        return newPaciente;
    }
}