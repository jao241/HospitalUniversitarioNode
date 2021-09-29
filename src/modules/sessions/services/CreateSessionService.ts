import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Medico from "../../medicos/typeorm/entities/Medico";
import MedicoRepository from "../../medicos/typeorm/repositories/MedicoRepository";

interface IRequest{
    crm:string;
    senha:string;
}
interface IResposne{
    medico:Medico;
    token:string;
}
export default class CreateSessionService{
    public async execute({crm, senha}:IRequest):Promise<IResposne>{
        const medicoRepository = getCustomRepository(MedicoRepository);
        const medico = await medicoRepository.findByCRM(crm);
        if(!medico){
            throw new AppError("Doctor not found!");
        }
        const senhaCorreta = await compare(senha, medico.senha);
        if(!senhaCorreta){
            throw new AppError("Incorrect crm|senha combination.");
        }
        const token = sign({}, "AAA", {
            subject: medico.id,
            expiresIn: "60s"
        })
        return {
            medico,
            token
        };
    }
}