const { DataTypes, UUIDV4, UUIDV1 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "recipe",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV1, // para que pongan los ids automaticamente la v1 crea los ids usando la fecha y hora de creacion
      },
      name: {
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
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      dishTypes: {
        type: DataTypes.TEXT,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
