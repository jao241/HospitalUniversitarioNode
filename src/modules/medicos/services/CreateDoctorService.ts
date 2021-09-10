import { getCustomRepository } from "typeorm";
import Medico from "../typeorm/entities/Medico";
import MedicoRepository from "../typeorm/repositories/MedicoRepository";
import {hash} from "bcryptjs";
import AppError from "../../../shared/errors/AppError";

interface IRequest{
    nome:string;
    crm:number;
    cpf:string;
    tipo:string;
    senha?:string;
    ano_residencia?:number;
    titulacao?:string;
}
export default class CreateDoctorService{
    public async execute({nome, crm, cpf, tipo, senha, ano_residencia, titulacao}:IRequest):Promise<Medico>{
        const medicoRepository = getCustomRepository(MedicoRepository);
        const medicoAlreadyExists = await medicoRepository.findByCRM(crm);
        if(medicoAlreadyExists){
            throw new AppError("Medico already exists.");
        }else{
            let senhaHash;
            if(senha){
                senhaHash = await hash(senha, 10);                
            }
            if(!ano_residencia){
                ano_residencia = undefined;
            }
            if(!titulacao){
                titulacao = undefined;
            }
            const medico = medicoRepository.create({
                nome,
                crm,
                cpf,
                tipo,
                senha: senhaHash,
                ano_residencia,
                titulacao
            });    
            await medicoRepository.save(medico);
            return medico;
        }  
    }
}