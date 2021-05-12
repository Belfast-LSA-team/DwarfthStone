require("dotenv").config();

const Thread = require("./models/thread");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    dialect: "postgres",
});

sequelize.define("Thread", Thread, {});

module.exports = sequelize;
