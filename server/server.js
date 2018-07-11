const express = require('express')
const server = express()

// Middleware


// Routes
server.get('/', (req, res) => {
    res.send('Hi')
})

module.exports = server