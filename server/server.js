const express = require('express')
const server = express()

const path = require('path')

// Routing
const fruits = require('./routes/fruits')

// Middleware
server.use(express.json())
server.use(express.static(path.join(__dirname, '../public'))) // serving our public/index.html

server.use('/api/v1/fruits', fruits)
// Routes


module.exports = server