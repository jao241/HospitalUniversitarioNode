import { request } from "express";
import { getRepository } from "typeorm";
import Laudo from "../typeorm/entities/Laudo";

interface IRequest{
    descricao:string;
    conclusao?:string;
    status:string;
    paciente_id:string;
    medico_id:string;
}
export default class CreateLaudoService{
    public async execute({descricao, conclusao, status, paciente_id, medico_id}:IRequest):Promise<Laudo>{
        const laudoRepository = getRepository(Laudo);
        if(!conclusao){
            conclusao = "";
        }
        const laudo = laudoRepository.create({
            descricao,
            conclusao,
            status,
            paciente_id,
            medico_id
        });
        await laudoRepository.save(laudo);
        return laudo;
    }
}