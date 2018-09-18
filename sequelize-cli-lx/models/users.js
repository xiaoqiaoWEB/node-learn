'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: {
        type: DataTypes.STRING(255)
    }
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
