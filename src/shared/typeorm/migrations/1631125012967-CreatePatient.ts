import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePatient1631125012967 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "pacientes",
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
                    name: "genero",
                    type: "varchar"
                },
                {
                    name: "cor",
                    type: "varchar"                    
                },
                {
                    name: "cpf",
                    type: "varchar",
                    isUnique: true                   
                },
                {
                    name:"data_nascimento",
                    type: "timestamp with time zone"
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
        await queryRunner.dropTable("pacientes");
    }

}
