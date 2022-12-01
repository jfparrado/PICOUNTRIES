const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "activity",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      difficulty: {
        //url de la bandera
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          max: 5, // only allow values <= 23
          min: 1,
        },
      },
      duration: {
        //continentes
        type: DataTypes.INTEGER,
      },
      seasons: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        isIn: [["Autumn", "Spring", "Summer", "Winter"]],
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
