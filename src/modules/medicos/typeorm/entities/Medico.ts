import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("medicos")
export default class Medico{
    @PrimaryGeneratedColumn("uuid")
    id:string;
    @Column()
    nome:string;
    @Column()
    crm:string;
    @Column()
    cpf:string;
    @Column()
    tipo:string;
    @Column()
    senha:string;
    @Column("int")
    ano_residencia:number;
    @Column()
    titulacao:string;
    @CreateDateColumn()
    created_at:Date;
    @UpdateDateColumn()
    updated_at:Date;
}