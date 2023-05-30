const Project = require('./model')

// build your `/api/projects` router here
const routerProject = require('express').Router()


routerProject.get('/', async (req, res, next) => {
  try {
    const all = await Project.getAll()
    res.status(200).json(all)
  } catch (err) {
    next(err)
  }
})


routerProject.post('/', async (req, res, next) => {
  try {
    const { project_name, project_description, project_completed } = req.body
    const insertPoject = await Project.postProjects(project_name, project_description, project_completed);

    res.status(200).json(insertPoject);

  } catch (err) {
    next(err)
  }
})





routerProject.use((err, req, res, next) => { //eslint-disable-line
  res.status(500).json({
    message: 'Something Wrong',
    err: err.message
  })
})

module.exports = routerProject