'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    photo: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  })

  User.associate = function (models) {
    //  code untuk relasi
    // Siswa.belongsTo(models.kelas, { as: 'kelas', foreignKey: "id_kelas" })
  };

  return User;
};