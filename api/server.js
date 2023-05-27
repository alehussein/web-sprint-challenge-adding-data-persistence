// build your server here and require it from index.js
const express = require('express')
const projectRouter = require('./project/router')
const resourcerouter = require('./resource/router')

const server = express()

server.use(express.json())

server.use('/api/projects', projectRouter)
server.use('/api/resources', resourcerouter)

server.use('*', (req, res) => {
    res.json({
        message: 'Api Up'
    })
})

module.exports = server


