const db = require('./connection')

// Functions for querying the 'fruits' table:
function getFruits() {
    return db('fruits')
}

function addFruit(fruit) {
    return db('fruits')
        .insert(fruit)
}

module.exports = {
    getFruits,
    addFruit
}