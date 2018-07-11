const express = require('express')
const router = express.Router()

// Database / serving to our api:
const fruitsDb = require('../db/fruits')

// Routes
router.get('/', (req, res) => {
    fruitsDb.getFruits()
        .then(fruits => {
            res.json(fruits)
        })
})

router.post('/', (req, res) => {
    console.log(req.body)

    const fruit = req.body // undefined? TODO

    fruitsDb.addFruit(fruit)

    res.send(req.body)
})

module.exports = router