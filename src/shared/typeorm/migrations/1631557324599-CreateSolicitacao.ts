import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSolicitacao1631557324599 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "solicitacoes",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                    name: "medico_crm",
                    type: "varchar"                    
                },
                {
                    name: "paciente_id",
                    type: "uuid"
                },
                {
                    name: "status",
                    type: "varchar"
                },
                {
                    name: "data_pedido",
                    type: "timestamp with time zone"
                },
                {
                    name: "data_exame",
                    type: "timestamp with time zone"
                },
                {
                    name: "hora_exame",
                    type: "time"
                },
                {
                    name: "hipotese",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp with time zone",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp with time zone",
                    default: "now()"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("solicitacoes");
    }

}
