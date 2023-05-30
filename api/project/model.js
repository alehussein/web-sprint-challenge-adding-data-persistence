// build your `Project` model here
const db = require('../../data/dbConfig')

async function getAll() {
  const projectsRows = await db('projects')
  const projects = projectsRows.map(project => ({
    ...project,
    project_completed: !!project.project_completed
  }))
  return projects
}

async function postProjects(project_name, project_description, project_completed) {
  const completed = project_completed !== undefined ? project_completed : false;
  await db('projects').insert({
    project_name: project_name,
    project_description: project_description,
    project_completed: completed
    
  })
  const insertedProject = await db('projects')
    .select()
    .where({ project_name: project_name })
    .first()
    insertedProject.project_completed = Boolean(insertedProject.project_completed)

  return insertedProject
}



module.exports = {
  getAll,
  postProjects,
}