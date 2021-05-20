const { DataTypes } = require("sequelize");

module.exports = {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    replies: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    created: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    last_updated: {
        type: DataTypes.DATE,
        allowNull: false,
    },
};