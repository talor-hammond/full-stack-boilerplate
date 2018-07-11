const express = require('express')
const router = express.Router()

// Routes
router.get('/', (req, res) => {
    res.send('Hello, route is working')
})

module.exports = router