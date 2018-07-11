const express = require('express')
const server = express()

// Routing
const fruits = require('./routes/fruits')

// Middleware
server.use(express.json()) // parser

server.use('/api/v1/fruits', fruits)
// Routes
server.get('/', (req, res) => {
    res.send('Hi there')
})

module.exports = server