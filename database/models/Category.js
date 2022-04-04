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

        tableName: "category",
        timestamps: false
    }


    const Category= sequelize.define("Category", cols, config);

    Category.associate = function(modelos) {
        Category.hasMany(modelos.Product, {
            as: "categories",
            foreignKey: "category"
        })
    }

    return Category;

}