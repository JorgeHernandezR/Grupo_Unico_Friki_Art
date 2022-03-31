module.exports = (sequelize, DataTypes) => {
    const cols = {
        product_id: {
            type: DataTypes.INTEGER
        },
        shopping_car_id: {
            type: DataTypes.INTEGER,
        },        
        amount: {
            type: DataTypes.INTEGER
        },
        price: {
            type: DataTypes.DOUBLE
        }

    }

    const config = {

        tableName: "shopping_product",
        timestamps: false
    }


    const ShoppingProduct= sequelize.define("Shopping_product", cols, config);

    return ShoppingProduct;

}