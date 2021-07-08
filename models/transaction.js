'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Transaction.init({
    subCategoryId: DataTypes.BIGINT,
    pocketId: DataTypes.BIGINT,
    amount: DataTypes.INTEGER,
    description: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    createdBy: DataTypes.BIGINT,
    updatedBy: DataTypes.BIGINT,
    createdAt: {type: DataTypes.DATETIME, defaultValue: Sequelize.fn('now')},
    updatedAt: {type: DataTypes.DATETIME, defaultValue: Sequelize.fn('now')},
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};