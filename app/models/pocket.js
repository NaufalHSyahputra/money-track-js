'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pocket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pocket.init({
    userId: DataTypes.BIGINT,
    icon: DataTypes.STRING,
    color: DataTypes.STRING,
    title: DataTypes.STRING,
    status: DataTypes.INTEGER,
    createdAt: {type: DataTypes.DATETIME, defaultValue: Sequelize.fn('now')},
    updatedAt: {type: DataTypes.DATETIME, defaultValue: Sequelize.fn('now')},
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pocket',
  });
  return Pocket;
};