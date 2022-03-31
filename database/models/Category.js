module.exports = (sequelize, DataTypes) => {
    const cols = {
        category_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100)
        }

    }

    const config = {

        tableName: "brand",
        timestamps: false
    }


    const Category= sequelize.define("Category", cols, config);

    return Category;

}