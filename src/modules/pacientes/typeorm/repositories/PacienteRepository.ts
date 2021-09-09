import { EntityRepository, Repository } from "typeorm";
import Paciente from "../entities/Paciente";

@EntityRepository(Paciente)
export default class PacienteRepository extends Repository<Paciente>{
    public async findByName(nome:string):Promise<Paciente | undefined>{
        const paciente = this.findOne({
            where: {
                nome
            }
        });
        return paciente;
    }
    public async findByCPF(cpf:string):Promise<Paciente | undefined>{
        const paciente = this.findOne({
            where:{
                cpf
            }
        });
        return paciente;
    }
}