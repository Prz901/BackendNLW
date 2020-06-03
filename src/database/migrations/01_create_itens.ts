import Knex from 'knex'

// função especializada em fazer alteraçoes no banco ou criar a tabela
export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary(),
        table.string('title').notNullable()
        table.string('image').notNullable()
    })
}
// deleta a tabela do banco ou voltar alguma alteração
export async function down(knex: Knex) {
    return knex.schema.dropTable('items')
}