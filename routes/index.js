const express = require("express");
var router = express.Router();

const items = require("../models/Item.model");

router.get("/", (req, res) => {
  res.send("Welcome to the prototype API!");
});

router.get("/api/ratingaverage/json", (req, res) => {
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

router.get("/api/reviews/json", (req, res) => {
  const itemId = parseInt(req.query.id);
  const item = items.find(e => e.id === itemId);
  console.log(item);
  if (!item) res.send(404);
  res.send(item);
});

module.exports = router;
