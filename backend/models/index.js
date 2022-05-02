const sequelize = require('../dbConnection')
const {DataTypes} = require('sequelize')

const Photo = sequelize.define('photo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    src: {type: DataTypes.STRING(5000), unique: true}
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    price: {type: DataTypes.INTEGER},
    cellPrice: {type: DataTypes.INTEGER},
    description: {type: DataTypes.STRING},
    views: {type: DataTypes.INTEGER, defaultValue: 0},
    cellPercent: {type: DataTypes.INTEGER, defaultValue: 0}
})

const ProductDetails = sequelize.define('product_details', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    key: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
})

const FavoriteProduct = sequelize.define('favorite_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const SubCategory = sequelize.define('subcategory', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
})

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    addresses: {type: DataTypes.ARRAY(DataTypes.TEXT)},
    bonusCount: {type: DataTypes.INTEGER, defaultValue: 0}
})

const FlowerProduct = sequelize.define('flower_product', {
    count: {type: DataTypes.INTEGER}
})

const Flower = sequelize.define('flower', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    number: {type: DataTypes.INTEGER} // кол-во цветов на складе
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true}
})

const BasketProduct = sequelize.define('basket_product', {
    count: {type: DataTypes.INTEGER},
},
    {
        freezeTableName: true,
        tableName: 'basket_product'
    })

const Basket = sequelize.define('basket', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
    },
    {
        freezeTableName: true,
        tableName: 'basket'
    }
)

// Basket содержит поле userId
User.hasOne(Basket)
Basket.belongsTo(User)

// SubCategory содержит поле categoryId
Category.hasOne(SubCategory)
SubCategory.belongsTo(Category)

// Product содержит поле subCategoryId
SubCategory.hasOne(Product)
Product.belongsTo(SubCategory)

// Product содержит поле categoryId
Category.hasOne(Product)
Product.belongsTo(Category)

// ProductDetails содержит productId
Product.hasMany(ProductDetails, {as: 'details'})
ProductDetails.belongsTo(Product)


// Photo содержит productId
Product.hasMany(Photo, {as: 'photos'})
Photo.belongsTo(Product)

// FlowerProduct содержит productId и flowerId
Product.belongsToMany(Flower, {through: FlowerProduct})
Flower.belongsToMany(Product, {through: FlowerProduct})

// // BasketProduct содержит productId и basketId
// Basket.belongsToMany(Product, {through: BasketProduct})
// Product.belongsToMany(Basket, {through: BasketProduct})

// // FavoriteProduct содержит productId и userId
User.hasMany(FavoriteProduct)
FavoriteProduct.belongsTo(User)

Product.hasMany(FavoriteProduct)
FavoriteProduct.belongsTo(Product)


// // BasketProduct содержит productId и basketId
Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)



module.exports = {
    User,
    Product,
    Category,
    SubCategory,
    Photo,
    Flower,
    FlowerProduct,
    FavoriteProduct,
    Basket,
    BasketProduct
}