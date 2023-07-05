 const { DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

module.exports = (sequelize, Sequelize) =>{
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      isEmail: {
          msg: 'Text should be email type'
      },
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    // freezeTableName: true,
    tableName: 'User',
    timestamps: true,
    updatedAt: 'updateTimestamp'
  });
  return User
}
