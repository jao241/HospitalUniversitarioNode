import { getRepository } from "typeorm";
import Solicitacao from "../typeorm/entities/Solicitacao";

interface IRequest{
    medico_crm:string;
    paciente_id:string;
    status:string;
    data_pedido:Date;
    data_exame:Date;
    hora_exame:string;
    hipotese:string;
}
export default class CreateSolicitacaoService{
    public async execute({medico_crm, paciente_id, status, data_pedido, data_exame, hora_exame, hipotese,}:IRequest):Promise<Solicitacao>{
        const solicitacaoRepository = getRepository(Solicitacao);
        const solicitacao = solicitacaoRepository.create({
            medico_crm,
            paciente_id,
            status,
            data_pedido,
            data_exame,
            hora_exame,
            hipotese            
        });
        await solicitacaoRepository.save(solicitacao);
        return solicitacao;
    }
}