import express from "express";
import { threadModel, messageModel } from "./connect";
import { Model } from "sequelize/types";

type getThreadByIdData = {
    thread: Model<any, any>[];
    messages: Model<any, any>[];
};

const apiRouter = express.Router();

apiRouter.get("/threads", async (req, res) => {
    const threads = await threadModel.findAll();

    res.json(threads);
});

apiRouter.post("/threads", async (req, res) => {
    const date = new Date();
    const thread = await threadModel.create({
        title: req.body.title,
        replies_count: 0,
        created: date,
        last_updated: date,
    });

    const oPost = await messageModel.create({
        author_id: 1,
        author_name: req.body.username,
        content: req.body.message,
        created: date,
        thread_id: thread.id,
    });

    res.json(thread.toJSON());
});

apiRouter.get("/thread/:threadId", async (req, res) => {
    const data: getThreadByIdData = { thread: [], messages: [] };

    const thread = await threadModel.findAll({
        where: {
            id: req.params.threadId,
        },
    });

    const messages = await messageModel.findAll({
        where: {
            thread_id: req.params.threadId,
        },
    });

    data.thread = thread;
    data.messages = messages;

    res.json(data);
});

export default apiRouter;
