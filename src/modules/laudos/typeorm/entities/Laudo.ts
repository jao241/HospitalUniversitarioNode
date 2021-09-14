import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("laudos")
export default class Laudo{
    @PrimaryGeneratedColumn("uuid")
    id:string;
    @Column()
    descricao:string;
    @Column()
    conclusao:string;
    @Column()
    status:string;
    @Column()
    paciente_id:string;
    @Column()
    medico_id:string;
    @CreateDateColumn()
    created_at:Date;
    @UpdateDateColumn()
    updated_at:Date;
}