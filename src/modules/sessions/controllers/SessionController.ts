import {Request, Response} from "express";
import CreateSessionService from "../services/CreateSessionService";

export default class SessionController{
    public async crate(request:Request, response:Response):Promise<Response>{
        const {crm, senha} = request.body;
        const createSessionService = new CreateSessionService();
        const session = await createSessionService.execute({crm, senha});
        return response.status(201).json(session);       
    }
}