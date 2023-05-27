// build your `/api/resources` router here
const resourceProject = require('express').Router()
const Resource = require('./model')

resourceProject.get('/:resource_id', (req, res, next) =>{
    Resource.getResourceById(req.params.resource_id)
    .then(resourceData => {
        res.status(200).json({resourceData})
    })
    .catch(next)
})

resourceProject.use((err, req, res, next) =>{ //eslint-disable-line
    res.status(500).json({
        message:'Something Wrong',
        err: err.message
    })
})

module.exports = resourceProject