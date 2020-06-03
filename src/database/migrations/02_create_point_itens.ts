import Knex from 'knex'

// função especializada em fazer alteraçoes no banco ou criar a tabela
export async function up(knex: Knex) {
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary(),
            table.integer('point_id')
                .notNullable()
                .references('id')
                .inTable('points')
            table.integer('item_id')
                .notNullable()
                .references('id')
                .inTable('items')
    })
}
// deleta a tabela do banco ou voltar alguma alteração
export async function down(knex: Knex) {
    return knex.schema.dropTable('point_items')
}