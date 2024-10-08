'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Phones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Phones.init(
    {
      model: DataTypes.STRING,
      brand: DataTypes.STRING,
      date_release: DataTypes.DATEONLY,
      ram: DataTypes.INTEGER,
      processor: DataTypes.STRING,
      diagonal: DataTypes.FLOAT,
      NFC: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Phones',
    }
  )
  return Phones
}
