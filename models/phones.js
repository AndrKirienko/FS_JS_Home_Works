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
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { len: [2, 50] },
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [2, 50] },
      },
      date_release: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: { isBefore: new Date().toISOString() },
      },
      ram: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 0 } },
      processor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [2, 50] },
      },
      diagonal: {
        type: DataTypes.FLOAT(5, 5),
        allowNull: false,
        validate: { min: 0 },
      },
      NFC: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {
      sequelize,
      modelName: 'Phones',
    }
  )
  return Phones
}
