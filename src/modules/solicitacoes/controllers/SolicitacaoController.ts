import { Request, Response } from "express";
import CreateSolicitacaoService from "../services/CreateSolicitacaoService";
import ListAllSolicitacaoService from "../services/ListAllSolicitacaoService";
import ListOneSolicitacaoService from "../services/ListOneSolicitacaoService";
import DeleteSolicitacaoService from "../services/DeleteSolicitacaoService";
import UpdateSolicitacaoService from "../services/UpdateSolicitacaoService";

export default class SolicitacaoController{
    public async create(request:Request, response:Response):Promise<Response>{
        const createSolicitacaoService = new CreateSolicitacaoService();
        const {medico_crm, paciente_id, status, data_pedido, data_exame, hora_exame, hipotese} = request.body;
        const solicitacao = await createSolicitacaoService.execute({medico_crm, paciente_id, status, data_pedido, data_exame, hora_exame, hipotese});
        return response.status(201).json(solicitacao);
    }
    public async index(request:Request, response:Response):Promise<Response>{
        const listAllSolicitacaoService = new ListAllSolicitacaoService();
        const solicitacoes = await listAllSolicitacaoService.execute();
        return response.status(200).json(solicitacoes);
    }
    public async show(request:Request, response:Response):Promise<Response>{
        const listOneSolicitacaoService = new ListOneSolicitacaoService();
        const {id} = request.params;
        const solicitacao = await listOneSolicitacaoService.execute({id});
        return response.status(200).json(solicitacao);
    }
    public async update(request:Request, response:Response):Promise<Response>{
        const updateSolicitacaoService = new UpdateSolicitacaoService();
        const {id} = request.params;
        const {medico_crm, paciente_id, status, data_pedido, data_exame, hora_exame, hipotese} = request.body;
        const solicitacao = await updateSolicitacaoService.execute({id, medico_crm, paciente_id, status, data_pedido, data_exame, hora_exame, hipotese});
        return response.status(200).json(solicitacao);
    }
    public async delete(request:Request, response:Response):Promise<Response>{
        const deleteSolicitacaoService = new DeleteSolicitacaoService();
        const {id} = request.params;
        const solicitacao = await deleteSolicitacaoService.execute({id});
        return response.status(200).json(solicitacao);
    }
}