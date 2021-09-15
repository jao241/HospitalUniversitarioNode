import { getRepository } from "typeorm";
import Laudo from "../typeorm/entities/Laudo";

export default class ListAllLaudosService{
    public async execute():Promise<Laudo[]>{
        const laudoRepository = getRepository(Laudo);
        const laudos = await laudoRepository.find();
        return laudos;
    }
}