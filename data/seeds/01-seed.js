const project = [
  {project_name: 'bar01', project_description: 'Project Bar 01'},
  {project_name: 'bar02', project_description: 'Project Bar 02'},
  {project_name: 'bar03', project_description: 'Project Bar 03'}
]

const resource = [
  {reource_name: 'foo01', resource_description: 'foo01'},
  {reource_name: 'foo02', resource_description: 'foo01'},
  {reource_name: 'foo03'}
]




/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('project').insert(project)
  await knex('resource').insert(resource);
};
