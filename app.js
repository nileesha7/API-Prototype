const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

/*CORS - Cross Origin Resource Sharing
  allows restricted resources on a web page to be requested from another 
  domain outside the domain from which the first resource was served
  source: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
*/
app.use(cors());

app.use(routes);

//start server
app.listen(3000, () => console.log("App listening on port 3000..."));
