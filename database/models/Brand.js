module.exports = (sequelize, DataTypes) => {
    const cols = {
        brand_id: {
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


    const Brand= sequelize.define("Brand", cols, config);

    Brand.associate = function(modelos) {
        Brand.hasMany(modelos.Product, {
            as: "brands",
            foreignKey: "brand"
        })
    }

    return Brand;

}