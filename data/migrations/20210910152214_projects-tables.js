
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

};

exports.down = function(knex) {
  
};
