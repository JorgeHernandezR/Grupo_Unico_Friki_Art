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

    return ShoppingCar;

}