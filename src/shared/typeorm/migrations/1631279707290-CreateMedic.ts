import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMedic1631279707290 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "medicos",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                    name: "nome",
                    type: "varchar"
                },
                {
                    name: "crm",
                    type: "varchar"
                },
                {
                    name: "cpf",
                    type: "varchar"
                },
                {
                    name: "tipo",
                    type: "varchar"
                },
                {
                    name: "senha",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "ano_residencia",
                    type: "int",
                    isNullable: true
                },
                {
                    name: "titulacao",
                    type: "varchar",
                    isNullable: true
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
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("medicos");
    }

}
