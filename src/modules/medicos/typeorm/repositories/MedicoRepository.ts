import { Repository } from "typeorm";
import Medico from "../entities/Medico";

export default class MedicoRepository extends Repository<Medico>{
    public async findByName(nome:string):Promise<Medico | undefined>{
        const medico = this.findOne({
            where: {
                nome
            }
        });
        return medico;
    }
    public async findByCRM(crm:string):Promise<Medico | undefined>{
        const medico = this.findOne({
            where: {
                crm
            }
        });
        return medico;
    }
    public async findByCPF(cpf:string):Promise<Medico | undefined>{
        const medico = this.findOne({
            where: {
                cpf
            }
        });
        return medico;
    }  
}