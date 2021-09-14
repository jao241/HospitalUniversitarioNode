import { Request, Response } from "express";
import CreateLaudoService from "../services/CreateLaudoService";

export default class LaudoController{
    public async create(request:Request, response:Response):Promise<Response>{
        const {descricao, conclusao, status, paciente_id, medico_id} = request.body;
        const createLaudoService = new CreateLaudoService();
        const laudo = await createLaudoService.execute({descricao, conclusao, status, paciente_id, medico_id});
        return response.status(201).json(laudo);
    }
}