const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");
const app = express();

app.use(cors());

app.use(routes);

app.listen(3000, () => console.log("App listening on port 3000..."));
