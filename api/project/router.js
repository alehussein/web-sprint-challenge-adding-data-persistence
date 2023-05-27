// build your `/api/projects` router here
const routerProject = require('express').Router()



routerProject.use((err, req, res, next) =>{ //eslint-disable-line
    res.status(500).json({
        message:'Something Wrong',
        err: err.message
    })
})

module.exports = routerProject