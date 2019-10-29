const knex = require('knex')
const config = require('./knexfile')

const environment = process.env.NODE_ENV || 'development';
console.log(environment);
const environmentConfig = config[environment];
const connection = knex(environmentConfig);

module.exports = connection;