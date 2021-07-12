'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SubCategory.init({
    categoryId: DataTypes.BIGINT,
    name: DataTypes.STRING,
    status: DataTypes.INTEGER,
    createdAt: {type: DataTypes.DATETIME, defaultValue: Sequelize.fn('now')},
    updatedAt: {type: DataTypes.DATETIME, defaultValue: Sequelize.fn('now')},
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'SubCategory',
  });
  return SubCategory;
};