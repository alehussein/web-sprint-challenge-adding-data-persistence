const project = [
  { project_name: 'bar01', project_description: 'Project Bar 01' },
  { project_name: 'bar02', project_description: 'Project Bar 02' },
  { project_name: 'bar03', project_description: 'Project Bar 03' }
]

const resource = [
  { resource_name: 'foo01', resource_description: 'foo01' },
  { resource_name: 'foo02', resource_description: 'foo01' },
  { resource_name: 'foo03' }
]




/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('resources').del()
  await knex('projects').insert(project)
  await knex('resources').insert(resource);
};
