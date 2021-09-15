import { getRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Laudo from "../typeorm/entities/Laudo";

interface IRequest{
    id:string;
    descricao:string;
    conclusao:string;
    status:string;
    paciente_id:string;
    medico_id:string;
}
export default class UpdateLaudoService{
    public async execute({id, descricao, conclusao, status, paciente_id, medico_id}:IRequest):Promise<Laudo>{
        const laudoRepository = getRepository(Laudo);
        const laudo = await laudoRepository.findOne(id);
        if(laudo){
            laudo.descricao = descricao;
            laudo.conclusao = conclusao;
            laudo.status = status;
            laudo.paciente_id = paciente_id;
            laudo.medico_id = medico_id;            
            await laudoRepository.save(laudo);
            return laudo;
        }else{
            throw new AppError("Laudo not found.");            
        }
    }
}