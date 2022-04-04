module.exports = (sequelize, DataTypes) => {
    const cols = {
        product_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100)
        },
        category: {
            type: DataTypes.INTEGER
        },
        brand: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING(500)
        },
        price:{
            type: DataTypes.DOUBLE
        },
        image: {
            type: DataTypes.STRING(300)
        }
    }

    const config = {

        tableName: "product",
        timestamps: false
    }


    const Product= sequelize.define("Product", cols, config);

    Product.associate = function(modelos) {

        Product.belongsTo(modelos.Category, {
            as: "categories",
            foreignKey: "category"
        });

        Product.belongsTo(modelos.Brand, {
            as: "brands",
            foreignKey: "brand"
        });

        Product.belongsToMany(modelos.Color, {
            as: "colors",
            through: "product_color",
            foreignKey: "product_id",
            otherKey: "color_id",
            timestamps: false
        });

        Product.belongsToMany(modelos.Shoping_car, {
            as: "shopping_products",
            through: "shopping_product",
            foreignKey: "product_id",
            otherKey: "shopping_id",
            timestamps: false
        });

    }

    return  Product;

}