module.exports = (sequelize, DataTypes) => {
    const cols = {
        product_id: {
            type: DataTypes.INTEGER
        },
        color_id: {
            type: DataTypes.INTEGER
        }

    }

    const config = {

        tableName: "product_color",
        timestamps: false
    }


    const ProductColor= sequelize.define("Product_color", cols, config);

    return ProductColor;

}