import Knex from 'knex'

// Migrations =  Historico do banco de dados

// função especializada em fazer alteraçoes no banco ou criar a tabela
export async function up(knex: Knex) {
    return knex.schema.createTable('points', table => {
        table.increments('id').primary(),
            table.string('image').notNullable(),
            table.string('name').notNullable(),
            table.string('email').notNullable(),
            table.string('whatsapp').notNullable(),
            table.decimal('latitude').notNullable(),
            table.decimal('longitude').notNullable(),
            table.string('city').notNullable(),
            table.string('uf', 2).notNullable()
    })
}
// deleta a tabela do banco ou voltar alguma alteração
export async function down(knex: Knex) {
    return knex.schema.dropTable('points')
}
