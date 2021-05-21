require("dotenv").config();

const Thread = require("./models/thread");
const Message = require("./models/message");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        port: process.env.POSTGRES_PORT,
        host: "localhost",
        dialect: "postgres",
    }
);

const threadModel = sequelize.define("Thread", Thread, {});
const messageModel = sequelize.define("Message", Message, {});

threadModel.hasMany(messageModel);

module.exports = sequelize;
