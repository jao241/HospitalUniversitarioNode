import { getRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Solicitacao from "../typeorm/entities/Solicitacao";

interface IRequest{
    id:string;
}
export default class DeleteSolicitacaoService{
    public async execute({id}:IRequest):Promise<Solicitacao>{
        const solicitacaoRepository = getRepository(Solicitacao);
        const solicitacao = await solicitacaoRepository.findOne(id);
        if(solicitacao){
            await solicitacaoRepository.remove(solicitacao);
            return solicitacao;
        }else{
            throw new AppError("Solicitacao not found.");
        }
    }
}