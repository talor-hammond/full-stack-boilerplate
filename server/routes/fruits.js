const express = require('express')
const router = express.Router()

// Database / serving to our api:
const fruitsDb = require('../db/fruits')

//
// router.use(express.json())

// Routes
router.get('/', (req, res) => {
    fruitsDb.getFruits()
        .then(fruits => {
            res.json(fruits)
        })
})

router.post('/', (req, res) => {
    const fruit = req.body

    fruitsDb.addFruit(fruit)
        .then(() => {
            res.sendStatus(200) // this is necessary; the connection must be closed
        })
})

module.exports = router