import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1587061901547
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'provider',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }
}

/**
 * Linha do tempo
 *
 * 1ª semana: Agendamentos
 * 2ª semana: Usuários
 * (NOVO DEV) 3ª Edição Agendamentos
 * 4ª semana: Compras (não refletiu as mudanças do novo dev)
 */
