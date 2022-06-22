module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  Category.associate = (models) => {
    Category.hasMany(models.Product, {
      foreignKey: {
        name: "categoryId",
        allowNull: false,
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
    Category.hasMany(models.Subcategory, {
      foreignKey: {
        name: "categoryId",
        allowNull: false,
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  };
  return Category;
};
