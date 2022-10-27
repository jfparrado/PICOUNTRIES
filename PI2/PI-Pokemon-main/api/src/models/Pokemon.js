const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "pokemon",
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
      hp: {
        type: DataTypes.INTEGER,
      },
      attack: {
        //fuerza
        type: DataTypes.INTEGER,
      },
      defense: {
        type: DataTypes.INTEGER,
      },
      speed: {
        type: DataTypes.INTEGER,
      },
      heigth: {
        type: DataTypes.INTEGER,
      },
      weight: {
        type: DataTypes.INTEGER,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
