import { getRepository } from "typeorm";
import Solicitacao from "../typeorm/entities/Solicitacao";

export default class ListAllSolicitacaoService{
    public async execute():Promise<Solicitacao[]>{
        const solicitacaoRepository = getRepository(Solicitacao);
        const solicitacoes = await solicitacaoRepository.find();
        return solicitacoes;
    }
}