module.exports = (sequelize, Sequelize) => {
    const Vehicule = sequelize.define("vehicles", {
        brand: {
            type: Sequelize.STRING
        },
        modele: {
            type: Sequelize.STRING
        },
        seriesNumber: {
            type: Sequelize.STRING
        },
        pieceToChange: {
            type: Sequelize.STRING
        },
    });

    Vehicule.associate = (models) => {
        Vehicule.belongsTo(models.User, { foreignKey: 'userId' });
    };

    return Vehicule;
};   