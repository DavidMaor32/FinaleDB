const bodyParser = require("body-parser");
const express = require("express");
//const usersRouter = require("./routes/users");
const depRouter = require("./routes/dep");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());
//app.use("/api/users", usersRouter);
app.use("/api/dep", depRouter);

app.get("/ping", (req, res) => {
    res.send("pong").status(200);
    });

module.exports = app;