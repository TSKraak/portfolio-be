"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  experience.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      logo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      period: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "experience",
    }
  );
  return experience;
};
