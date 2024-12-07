const { Model, DataTypes } = require('sequelize')

class Puppy extends Model {
  static init(connection){
    super.init({
      name: DataTypes.STRING,
      gender: DataTypes.STRING,
      color: DataTypes.STRING,
      age: DataTypes.STRING,
      size: DataTypes.STRING,
    }, {
      sequelize: connection,
      schema: 'public',
      tableName: 'puppies',
      timestamp: true,
      underscored: false
    })
  }
}

module.exports = Puppy