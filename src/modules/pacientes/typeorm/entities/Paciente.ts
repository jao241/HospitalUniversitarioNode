import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("pacientes")
export default class Paciente{
    @PrimaryGeneratedColumn("uuid")
    id:string;
    @Column()
    nome:string;
    @Column()
    genero:string;
    @Column()
    cor:string;
    @Column()
    cpf:string;
    @Column()
    data_nascimento:Date;
    @CreateDateColumn()
    created_at:Date;
    @UpdateDateColumn()
    updated_at:Date;
}