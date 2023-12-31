const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull:false
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    flags: {
      type: DataTypes.STRING,
      allowNull:false
    },

    continents: {
      type: DataTypes.STRING,
      allowNull:false
    },
    
    capital: {
      type: DataTypes.STRING,
      allowNull:false
    },
    
    area: {
      type: DataTypes.DECIMAL,
      
    },
    subregion: {
      type: DataTypes.STRING,
      
    },

    population: {
      type: DataTypes.INTEGER,
     
    },
    maps:{
      type: DataTypes.STRING(1000),
    },
  },
    { timestamps: false }
  )
};
