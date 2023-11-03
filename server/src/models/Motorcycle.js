module.exports = (sequelize, DataTypes) => {
    const Motorcycle = sequelize.define('Motorcycle', {
      brand: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      engineType: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      topSpeed: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      owner: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    });
  
    Motorcycle.associate = function (models) { };
    
    return Motorcycle;
  }
  