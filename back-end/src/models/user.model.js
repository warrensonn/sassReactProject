module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.INTEGER
        }
    });

    User.associate = (models) => {
        User.hasMany(models.Vehicule, { foreignKey: 'userId' });
    };
    return User;
};