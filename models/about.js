"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class about extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  about.init(
    {
      about: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      portrait: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "about",
    }
  );
  return about;
};
