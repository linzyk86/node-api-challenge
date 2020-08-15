const express = require("express")

const server = express()
const actionRouter = require("./data/actionRouter")
const projectRouter = require("./data/projectRouter")


const logger = require('./data/middleware/logger')

const port = 8080

server.use(express.json())
server.use(logger())
server.use(actionRouter)
server.use(projectRouter)



server.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})
