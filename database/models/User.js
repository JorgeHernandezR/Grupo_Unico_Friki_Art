module.exports = (sequelize, DataTypes) => {
    const cols = {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(50)
        },
        name: {
            type: DataTypes.STRING(100)
        },
        last_name: {
            type: DataTypes.STRING(100)
        },
        email: {
            type: DataTypes.STRING(150)
        },
        password : {
            type: DataTypes.STRING(100)
        },
        user_category: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.STRING(300)
        },
    }

    const config = {

        tableName: "user",
        timestamps: false
    }


    const User= sequelize.define("User", cols, config);

    User.associate = function (modelos) {

        User.hasMany(modelos.Shopping_car,{
            as: "user",
            foreignKey: "user_id"
        })
        
        User.belongsTo(modelos.User_category,{
            as: "user_category",
            foreignKey: "user_category"
        })

    }

    return User;

}