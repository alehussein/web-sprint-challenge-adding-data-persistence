/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('project', table =>{
        table.increments('project_id')
        table.string('project_name', 100).notNullable()
        table.string('project_description', 200)
        table.integer('poject_completed').defaultTo(0)
    })
    await knex.schema.createTable('resource', table => {
        table.increments('resource_id')
        table.string('reource_name', 100).notNullable()
        table.string('resource_description', 200)
    })
    await knex.schema.createTable('task', table => {
        table.increments('task_id')
        table.string('task_description').notNullable
        table.string('task_notes')
        table.integer('task_completed').defaultTo(0)
        table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('project')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })
    await knex.schema.createTable('project_resources', table => {
        table.increments('project_resource_id')
        table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('project')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
        table.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resource')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('task')
    .dropTableIfExists('resource')
    .dropTableIfExists('project')
  
};
