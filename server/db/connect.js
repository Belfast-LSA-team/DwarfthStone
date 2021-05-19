require("dotenv").config();

const Thread = require("./models/thread");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        port: process.env.POSTGRES_PORT,
        host: "postgres",
        dialect: "postgres",
    }
);

sequelize.define("Thread", Thread, {});

module.exports = sequelize;
