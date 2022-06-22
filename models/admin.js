const { ADMIN_ROLE } = require('../config/constants');
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    'Admin',
    {
      employeeId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      role: {
        type: DataTypes.ENUM(
          ADMIN_ROLE.SUPER_ADMIN,
          ADMIN_ROLE.PRODUCT_ADMIN,
          ADMIN_ROLE.ORDER_ADMIN,
          ADMIN_ROLE.CLIENT_ADMIN
        ),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    { underscored: true }
  );
  Admin.associate = (models) => {
    Admin.hasMany(models.Product, {
      foreignKey: 'adminId',
      allowNull: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return Admin;
};
