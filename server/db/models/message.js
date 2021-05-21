const { DataTypes } = require("sequelize");

module.exports = {
    author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    author_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    created: {
        type: DataTypes.DATE,
        allowNull: false,
    },
};
