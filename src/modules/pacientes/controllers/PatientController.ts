import { Request, Response } from "express";
import CreatePatientService from "../services/CreatePatientService";
import DeletePatientService from "../services/DeletePatientService";
import ListAllPatientService from "../services/ListAllPatientService";
import ListOnePatientByCPFService from "../services/ListOnePatientByCPFService";
import ListOnePatitentByIdService from "../services/ListOnePatientByIdService";
import ListOnePatientByNomeService from "../services/ListOnePatientByNomeService";
import UpdatePatientService from "../services/UpdatePatientService";

export default class PatientController{
    public async create(request:Request, response:Response):Promise<Response>{
        const createPatientService = new CreatePatientService();
        const {nome, genero, cor, cpf, data_nascimento} = request.body;
        const newPaciente = await createPatientService.execute({nome, genero, cor, cpf, data_nascimento});
        return response.status(201).json(newPaciente);
    }
    public async index(request:Request, response:Response):Promise<Response>{
        const listAllPatientService = new ListAllPatientService();
        const pacientes = await listAllPatientService.execute();
        return response.status(200).json(pacientes);
    }
    public async showByNome(request:Request, response:Response):Promise<Response>{
        const listOnePatientByNomeService = new ListOnePatientByNomeService();
        const {nome} = request.body;
        const paciente = await listOnePatientByNomeService.execute({nome});
        return response.status(200).json(paciente);
    }
    public async showById(request:Request, response:Response):Promise<Response>{
        const listOnePatientByIdService = new ListOnePatitentByIdService();
        const {id} = request.params;
        const paciente = await listOnePatientByIdService.execute({id});
        return response.status(200).json(paciente);
    }
    public async showByCPF(request:Request, response:Response):Promise<Response>{
        const listOnePatientByCPFService = new ListOnePatientByCPFService();
        const {cpf} = request.body;
        const paciente = await listOnePatientByCPFService.execute({cpf});
        return response.status(200).json(paciente);
    }
    public async update(request:Request, response:Response):Promise<Response>{
        const updatePatientService = new UpdatePatientService();
        const {id} = request.params;
        const {nome, genero, cor, cpf, data_nascimento} = request.body;
        const paciente = await updatePatientService.execute({id, nome, genero, cor, cpf, data_nascimento});
        return response.status(200).json(paciente);
    }
    public async delete(request:Request, response:Response):Promise<Response>{
        const deletePatientService = new DeletePatientService();
        const {id} = request.params;
        const paciente = await deletePatientService.execute({id});
        return response.status(200).json(paciente);
    }
}