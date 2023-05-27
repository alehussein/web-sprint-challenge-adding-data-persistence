// build your `/api/resources` router here
const resourceProject = require('express').Router()



resourceProject.use((err, req, res, next) =>{ //eslint-disable-line
    res.status(500).json({
        message:'Something Wrong',
        err: err.message
    })
})

module.exports = resourceProject