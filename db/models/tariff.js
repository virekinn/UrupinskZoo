'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tariff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tariff.init({
    adults_weekdays: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    children_weekdays: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    adults_weekend: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    children_weekend: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Tariff',
  });
  return Tariff;
};
