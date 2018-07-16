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
        .catch(err => {
            if (err) throw err
        })
})

router.post('/', (req, res) => {
    const fruit = req.body

    fruitsDb.addFruit(fruit)
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => {
            if (err) throw err
        })
})

module.exports = router