'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      model: {
        type: Sequelize.STRING,
      },
      brand: {
        type: Sequelize.STRING,
      },
      date_release: {
        type: Sequelize.DATEONLY,
      },
      ram: {
        type: Sequelize.INTEGER,
      },
      processor: {
        type: Sequelize.STRING,
      },
      diagonal: {
        type: Sequelize.FLOAT,
      },
      NFC: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Phones')
  },
}
