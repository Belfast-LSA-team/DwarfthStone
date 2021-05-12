const express = require("express");
const db = require("./db/connect");

const app = express();

app.use(express.static("dist"));

db.authenticate();
db.sync();

app.listen(3010, () => {
    console.log("Listening");
});
