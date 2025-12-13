const { dbRouter } = require("./routes/route");

const express = require("express");
const morgan = require("morgan");
const app = express();
const middlewareArray = [morgan("dev")];

app.use(middlewareArray);
app.use("/", dbRouter);

module.exports = app;
