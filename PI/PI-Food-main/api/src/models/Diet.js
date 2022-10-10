const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("diet", {
    id_diet: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name_diet: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
