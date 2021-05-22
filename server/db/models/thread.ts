import DataTypes from "sequelize";

export const Thread = {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    replies_count: {
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
