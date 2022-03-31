module.exports = (sequelize, DataTypes) => {
    const cols = {
        user_category_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100)
        }

    }

    const config = {

        tableName: "user_category",
        timestamps: false
    }


    const UserCategory= sequelize.define("User_category", cols, config);

    return UserCategory;
}