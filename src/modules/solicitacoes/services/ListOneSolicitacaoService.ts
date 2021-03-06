import { getRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Solicitacao from "../typeorm/entities/Solicitacao";

interface IRequest{
    id:string;
}
export default class ListOneSolicitacaoService{
    public async execute({id}:IRequest):Promise<Solicitacao>{
        const solicitacaoRepository = getRepository(Solicitacao);
        const solicitacao = await solicitacaoRepository.findOne(id);
        if(solicitacao){
            return solicitacao;
        }else{
            throw new AppError("Solicitação not found.");
        }
    }
}