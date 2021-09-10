
exports.up = async function(knex) {
  await knex.schema
    .createTable('projects', table => {
        table.increments('project_id')
        table.string('project_name', 128).notNullable
        table.string('project_description', 128)
        table.boolean('project_completed')
    })
    .createTable('resources', table => {
        table.increments('resource_id')
        table.string('resource_name', 128).notNullable().unique()
        table.string('resource_description', 128)
    })
    .createTable('tasks', table => {
        table.increments('task_id')
        table.string('task_description', 128).notNullable()
        table.string('task_notes', 128)
        table.boolean('task_completed')
        table.integer('project_id').notNullable().references('project_id').inTable('projects').onDelete('RESTRICT').onUpdate('RESTRICT')
    })
    .createTable('project_resources', table => {
        table.increments('project_resource_id')
        table.integer('project_id').notNullable().references('project_id').inTable('projects').onDelete('RESTRICT').onUpdate('RESTRICT')
        table.string('quantity', 128)
    })
};

exports.down = function(knex) {
  
};
