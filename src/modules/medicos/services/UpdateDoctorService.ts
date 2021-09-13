import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Medico from "../typeorm/entities/Medico";
import MedicoRepository from "../typeorm/repositories/MedicoRepository";

interface IRequest{
    id:string;
    nome:string;
    crm:string;
    cpf:string;
    tipo:string;
    senha?:string;
    ano_residencia?:number;
    titulacao?:string;
}
export default class UpdateDoctorService{
    public async execute({id, nome, crm, cpf, tipo, senha, ano_residencia, titulacao}:IRequest):Promise<Medico>{
        const medicoRepository = getCustomRepository(MedicoRepository);
        const medico = await medicoRepository.findOne(id);
        if(medico){
            medico.nome = nome;
            medico.crm = crm;
            medico.cpf = cpf;
            medico.tipo = tipo;
            if(senha){
                medico.senha = await hash(senha, 10);
            }
            if(ano_residencia){
                medico.ano_residencia = ano_residencia;
            }
            if(titulacao){
                medico.titulacao = titulacao;
            }            
            await medicoRepository.save(medico);
            return medico;
        }else{
            throw new AppError("Doctor not found.");
        }
    }
}