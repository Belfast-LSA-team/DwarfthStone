const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    text: {
        type: DataTypes.STRING,
    },
};
