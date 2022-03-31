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

    return Color;

}