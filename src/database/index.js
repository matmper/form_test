const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const connection = new Sequelize(dbConfig)

const Puppy = require('../models/Puppy')

Puppy.init(connection)

module.exports = connection
