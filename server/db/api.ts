import express from "express";
import { threadModel, messageModel } from "./connect";

const apiRouter = express.Router();

apiRouter.get("/threads", async (req, res) => {
    const threads = await threadModel.findAll();

    res.json(threads);
});

apiRouter.post("/threads", async (req, res) => {
    console.log(req.body);

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

export default apiRouter;
