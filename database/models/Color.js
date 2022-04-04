module.exports = (sequelize, DataTypes) => {
    const cols = {
        color_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100)
        }

    }

    const config = {

        tableName: "color",
        timestamps: false
    }


    const Color= sequelize.define("Color", cols, config);

    Color.associate = function(modelos) {
        Color.belongsToMany(modelos.Product, {
            as: "colors",
            through: "product_color",
            foreignKey: "color_id",
            otherKey: "product_id",
            timestamps: false
        });
    }

    return Color;

}