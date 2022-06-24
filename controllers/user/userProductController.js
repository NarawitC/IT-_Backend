const {
  Property,
  Product,
  Category,
  SubCategory,
  Promotion,
} = require('../../models');

exports.getAllProduct = async (req, res, next) => {
  try {
    const products = await Product.findAll({
      order: [['name', 'ASC']],
      include: [
        {
          model: Promotion,
        },
      ],
    });
    res.status(200).json({
      meessage: 'Get all product successfully',
      products,
    });
  } catch (err) {
    next(err);
  }
};

exports.getPropductById = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.findOne({
      where: { id: productId },
      include: [
        {
          model: Promotion,
        },
      ],
    });
    res.status(200).json({
      message: 'Get product successfully',
      product,
    });
  } catch (err) {
    next(err);
  }
};

exposts.getProductByCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const products = await Product.findAll({
      where: { categoryId },
      order: [['name', 'ASC']],
      include: [{ model: Category }],
    });
    res.status(200).json({
      meessage: 'Get all product successfully',
      products,
    });
  } catch (err) {
    next(err);
  }
};

exposts.getProductBySubCategory = async (req, res, next) => {
  try {
    const { subCategoryId } = req.params;
    const products = await Product.findAll({
      where: { subCategoryId },
      order: [['name', 'ASC']],
      include: [{ model: SubCategory }],
    });
    res.status(200).json({
      meessage: 'Get all product successfully',
      products,
    });
  } catch (err) {
    next(err);
  }
};

exposts.getProductBySearchText = async (req, res, next) => {
  try {
    const { searchText } = req.params;
    const products = await Product.findAll({
      where: { productName: { [Op.like]: `%${searchText}%` } },
      order: [['name', 'ASC']],
    });
    res.status(200).json({
      meessage: 'Get all product by text successfully',
      products,
    });
  } catch (err) {
    next(err);
  }
};
exposts.getProductBySearchBrand = async (req, res, next) => {
  try {
    const { searchText } = req.params;
    const products = await Product.findAll({
      where: { brand: { [Op.like]: `%${searchText}%` } },
      order: [['name', 'ASC']],
    });
    res.status(200).json({
      meessage: 'Get all product by brand successfully',
      products,
    });
  } catch (err) {
    next(err);
  }
};
