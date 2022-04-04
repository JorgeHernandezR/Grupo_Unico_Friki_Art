module.exports = (sequelize, DataTypes) => {
    const cols = {
        shopping_car_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        date: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.STRING(50)
        }

    }

    const config = {

        tableName: "shopping_car",
        timestamps: false
    }


    const ShoppingCar= sequelize.define("Shopping_car", cols, config);

    ShoppingCar.associate = function (modelos) {
        ShoppingCar.belongsToMany(modelos.Product, {
            as: "shopping_products",
            through: "shopping_product",
            foreignKey: "shopping_id",
            otherKey: "product_id",
            timestamps: false
        });

        ShoppinCar.belongsTo(modelos.User, {
            as: "user",
            foreignKey: "user_id"
        })

    }

    return ShoppingCar;

}