import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Paciente from "../typeorm/entities/Paciente";
import PacienteRepository from "../typeorm/repositories/PacienteRepository";

interface IRequest{
    id:string;
    nome:string;
    genero:string;
    cor:string;
    cpf:string;
    data_nascimento:Date;
}
export default class UpdatePatientService{
    public async execute({id, nome, genero, cor, cpf, data_nascimento}:IRequest):Promise<Paciente>{
        const pacienteRepository = getCustomRepository(PacienteRepository);
        const paciente = await pacienteRepository.findOne(id);
        const pacienteWithCPFExists = await pacienteRepository.findByCPF(cpf);
        if(paciente){
            if(pacienteWithCPFExists && pacienteWithCPFExists.cpf !== paciente.cpf){
                throw new AppError("Exists Other patient with this CPF.");
            }
            paciente.nome = nome;
            paciente.genero = genero;
            paciente.cor = cor;
            paciente.cpf = cpf;
            paciente.data_nascimento = data_nascimento;
            await pacienteRepository.save(paciente);
            return paciente;
        }else{
            throw new AppError("Patient not exists.");
        }
    }
}