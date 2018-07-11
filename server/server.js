const express = require('express')
const server = express()

// Middleware


// Routes
server.get('/', (req, res) => {
    res.send('Hi there')
})

module.exports = server