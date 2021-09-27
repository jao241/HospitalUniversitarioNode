import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Medico from "../../medicos/typeorm/entities/Medico";
import MedicoRepository from "../../medicos/typeorm/repositories/MedicoRepository";

interface IRequest{
    crm:string;
    senha:string;
}
export default class CreateSessionService{
    public async execute({crm, senha}:IRequest):Promise<Medico>{
        const medicoRepository = getCustomRepository(MedicoRepository);
        const medico = await medicoRepository.findOne(crm);
        if(!medico){
            throw new AppError("Doctor not found!");
        }
        const senhaCorreta = await compare(senha, medico.senha);
        if(!senhaCorreta){
            throw new AppError("Incorrect crm/senha combination.");
        }
        return medico;
    }
}