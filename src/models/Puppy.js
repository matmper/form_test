const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

class Puppy extends Model {
  //
}

Puppy.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.STRING,
    },
  },
  { sequelize, tableName: 'puppies', timestamps: true }
)

module.exports = Puppy
