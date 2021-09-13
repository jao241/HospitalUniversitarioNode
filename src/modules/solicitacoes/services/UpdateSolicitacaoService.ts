import { getRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Solicitacao from "../typeorm/entities/Solicitacao";

interface IRequest{
    id:string;
    medico_crm:string;
    paciente_id:string;
    status:string;
    data_pedido:Date;
    data_exame:Date;
    hora_exame: string;
    hipotese:string;
}
export default class UpdateSolicitacaoService{
    public async execute({id, medico_crm, paciente_id, status, data_pedido, data_exame, hora_exame, hipotese}:IRequest):Promise<Solicitacao>{
        const solicitacaoRepository = getRepository(Solicitacao);
        const solicitacao = await solicitacaoRepository.findOne(id);
        if(solicitacao){
            solicitacao.medico_crm = medico_crm;
            solicitacao.paciente_id = paciente_id;
            solicitacao.status = status;
            solicitacao.data_pedido = data_pedido;
            solicitacao.data_exame = data_exame;
            solicitacao.hora_exame = hora_exame;
            solicitacao.hipotese = hipotese;
            await solicitacaoRepository.save(solicitacao);
            return solicitacao;
        }else{
            throw new AppError("Solicitação not found.");
        }
    }
}