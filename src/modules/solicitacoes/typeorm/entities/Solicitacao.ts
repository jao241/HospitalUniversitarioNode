import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("solicitacoes")
export default class Solicitacao{
    @PrimaryGeneratedColumn("uuid")
    id:string;
    @Column()
    medico_crm:string;
    @Column()
    paciente_id:string;
    @Column()
    status:string;
    @Column("date")
    data_pedido:Date;
    @Column("date")
    data_exame:Date;
    @Column("time")
    hora_exame:string;
    @Column()
    hipotese:string;
    @CreateDateColumn()
    created_at:Date;
    @UpdateDateColumn()
    updated_at:Date;
}