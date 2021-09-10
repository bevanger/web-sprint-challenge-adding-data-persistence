
exports.up = async function(knex) {
  await knex.schema
    .createTable('projects', table => {
        table.increments('project_id')
        table.string('project_name', 128).notNullable
        table.string('project_description', 128)
        table.boolean('project_completed')
    })
};

exports.down = function(knex) {
  
};
