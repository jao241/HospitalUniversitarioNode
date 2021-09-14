import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLaudo1631643247588 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "laudos",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                    name: "descricao",
                    type: "varchar"
                },
                {
                    name: "conclusao",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "status",
                    type: "varchar"
                },
                {
                    name: "paciente_id",
                    type: "uuid"
                },
                {
                    name: "medico_id",
                    type: "uuid"
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
        await queryRunner.dropTable("laudos");
    }

}
