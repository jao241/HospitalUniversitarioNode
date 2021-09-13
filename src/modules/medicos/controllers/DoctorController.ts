import { Request, Response } from "express";
import CreateDoctorService from "../services/CreateDoctorService";
import ListAllDoctorService from "../services/ListAllDoctorService";
import ListOneDoctorByCPFService from "../services/ListOneDoctorByCPFService";
import ListOneDoctorByCRMService from "../services/ListOneDoctorByCRMService";
import ListOnseDoctorByIdService from "../services/ListOneDoctorByIdService";
import ListOneDoctorByNameService from "../services/ListOneDoctorByNameService";
import RemoveDoctorService from "../services/RemoveDoctorService";
import UpdateDoctorService from "../services/UpdateDoctorService";

export default class DoctorController{
    public async create(request:Request, response:Response):Promise<Response>{
        const createDoctorService = new CreateDoctorService();
        const {nome, crm, cpf, tipo, senha, ano_residencia, titulacao} = request.body;
        const newMedico = await createDoctorService.execute({nome, crm, cpf, tipo, senha, ano_residencia, titulacao});
        return response.status(201).json(newMedico);
    }
    public async index(request:Request, response:Response):Promise<Response>{
        const listAllDoctorService = new ListAllDoctorService();
        const allMedicos = await listAllDoctorService.execute();
        return response.status(200).json(allMedicos);
    }
    public async listOneDoctorById(request:Request, response:Response):Promise<Response>{
        const listOneDoctorById = new ListOnseDoctorByIdService();
        const {id} = request.params;
        const medico = await listOneDoctorById.execute({id});
        return response.status(200).json(medico);
    }
    public async listOneDoctorByName(request:Request, response:Response):Promise<Response>{
        const listOneDoctorByName = new ListOneDoctorByNameService();
        const {nome} = request.params;
        const medico = await listOneDoctorByName.execute({nome});
        return response.status(200).json(medico);
    }
    public async listOneDoctorByCPF(request:Request, response:Response):Promise<Response>{
        const listOneDoctorByCPF = new ListOneDoctorByCPFService();
        const {cpf} = request.params;
        const medico = await listOneDoctorByCPF.execute({cpf});
        return response.status(200).json(medico);
    }
    public async listOneDoctorByCRM(request:Request, response:Response):Promise<Response>{
        const listOneDoctorByCRM = new ListOneDoctorByCRMService();
        const {crm} = request.params;
        const medico = await listOneDoctorByCRM.execute({crm});
        return response.status(200).json(medico);
    }
    public async update(request:Request, response:Response):Promise<Response>{
        const updateDoctorService = new UpdateDoctorService();
        const {id} = request.params;
        const {nome, crm, cpf, tipo, senha, ano_residencia, titulacao} = request.body;
        const medico = await updateDoctorService.execute({id, nome, crm, cpf, tipo, senha, ano_residencia, titulacao});
        return response.status(200).json(medico);
    }
    public async delete(request:Request, response:Response):Promise<Response>{
        const removeDoctorService = new RemoveDoctorService();
        const {id} = request.params;
        const medico = await removeDoctorService.execute({id});
        return response.status(200).json(medico);
    }
}