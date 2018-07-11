// Setting up our connection:
const knex = require('knex')
const config = require('../../knexfile').development // config comes from our knexfile.js; this is our development config
const connection = knex(config)

module.exports = connection