import { Request, Response } from "express";
import CreateLaudoService from "../services/CreateLaudoService";
import ListAllLaudosService from "../services/ListAllLaudosService";
import ListOneLaudoService from "../services/ListOneLaudoService";
import RemoveLaudoService from "../services/RemoveLaudoService";
import UpdateLaudoService from "../services/UpdateLaudoService";

export default class LaudoController{
    public async create(request:Request, response:Response):Promise<Response>{
        const {descricao, status, paciente_id, medico_id} = request.body;
        const conclusao = request.file?.originalname;
        const createLaudoService = new CreateLaudoService();
        const laudo = await createLaudoService.execute({descricao, conclusao, status, paciente_id, medico_id});
        return response.status(201).json(laudo);
    }
    public async index(request:Request, response:Response):Promise<Response>{
        const listAllLaudosService = new ListAllLaudosService();
        const laudos = await listAllLaudosService.execute();
        return response.status(200).json(laudos);
    }
    public async show(request:Request, response:Response):Promise<Response>{
        const listOneLaudoService = new ListOneLaudoService();
        const {id} = request.params;
        const laudo = await listOneLaudoService.execute({id});
        return response.status(200).json(laudo);
    }
    public async update(request:Request, response:Response):Promise<Response>{
        const updateLaudoService = new UpdateLaudoService();
        const {id} = request.params;
        const {descricao, status, paciente_id, medico_id} = request.body;
        let conclusao = request.file?.originalname;
        if(!conclusao){
            conclusao = "";
        }
        const laudo = await updateLaudoService.execute({id, descricao, conclusao, status, paciente_id, medico_id});
        return response.status(200).json(laudo);
    }
    public async delete(request:Request, response:Response):Promise<Response>{
        const removeLaudoService = new RemoveLaudoService();
        const {id} = request.params;
        const laudo = await removeLaudoService.execute({id});
        return response.status(200).json(laudo);
    }
}