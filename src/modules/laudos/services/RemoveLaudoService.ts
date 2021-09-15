import { getRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Laudo from "../typeorm/entities/Laudo";

interface IRequest{
    id:string;
}
export default class RemoveLaudoService{
    public async execute({id}:IRequest):Promise<Laudo>{
        const laudoRepository = getRepository(Laudo);
        const laudo = await laudoRepository.findOne(id);
        if(laudo){
        await laudoRepository.remove(laudo);
        return laudo;
        }else{
            throw new AppError("Laudo not found.");
        }
    }
}