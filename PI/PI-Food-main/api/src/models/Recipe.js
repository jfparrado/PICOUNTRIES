const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("recipe", {
    id_recipe: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name_recipe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.FLOAT,
    },
    steps: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
