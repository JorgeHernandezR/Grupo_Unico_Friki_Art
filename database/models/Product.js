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

    return  Product;

}