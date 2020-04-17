const knex = require('knex');
const configuration = require('../knexfile.js').development;
const db = knex(configuration);

module.exports = db