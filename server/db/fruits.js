const db = require('./connection')

// Functions for querying the 'fruits' table:
function getFruits() {
    return db('fruits')
        .then(fruits => {
            console.log(fruits)
        })
}

getFruits()

module.exports = {
    getFruits
}