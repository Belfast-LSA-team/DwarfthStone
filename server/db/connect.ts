import dotenv from "dotenv";

import { Thread } from "./models/thread";
import { Message } from "./models/message";
import { Sequelize } from "sequelize";

dotenv.config();

const {
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_PORT,
} = process.env;

if (
    POSTGRES_DB === undefined ||
    POSTGRES_USER === undefined ||
    POSTGRES_PASSWORD === undefined ||
    POSTGRES_PORT === undefined
) {
    throw new Error(
        "Не заданы одна или несколько переменных среды для подключения к БД"
    );
}

const sequelize = new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
    port: Number(POSTGRES_PORT),
    host: "localhost",
    dialect: "postgres",
});

const threadModel = sequelize.define("Thread", Thread, {});
const messageModel = sequelize.define("Message", Message, {});

threadModel.hasMany(messageModel);

export default sequelize;
