const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "country",
    {
      cca3: {
        //id del pais
        type: DataTypes.STRING(3),
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flags: {
        //url de la bandera
        type: DataTypes.STRING,
        allowNull: false,
        isUrl: true,
      },
      region: {
        //continentes
        type: DataTypes.STRING,
        allowNull: false,
        isIn: [["Africa", "Americas", "Antartic", "Asia", "Europe", "Oceania"]],
      },
      capital: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      subregion: {
        type: DataTypes.STRING,
      },
      area: {
        type: DataTypes.INTEGER,
      },
      population: {
        type: DataTypes.INTEGER,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
