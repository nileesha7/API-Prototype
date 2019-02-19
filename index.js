const items = require("./models/Item.model");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the prototype API!");
});

app.get("/api/ratingaverage/json", (req, res) => {
  const itemId = parseInt(req.query.id);
  const item = items.find(e => e.id === itemId);
  if (!item) res.send(404);
  res.json({
    id: item.id,
    name: item.name,
    average: item.average,
    ratingsCount: item.ratingsCount
  });
});
app.get("/api/reviews/json", (req, res) => {
  const itemId = parseInt(req.query.id);
  const item = items.find(e => e.id === itemId);
  console.log(item);
  if (!item) res.send(404);
  res.send(item);
});
app.listen(3000, () => console.log("App listening on port 3000..."));
