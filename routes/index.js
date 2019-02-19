const express = require("express");
var router = express.Router();

const items = require("../models/Item.model");

router.get("/", (req, res) => {
  res.send("Welcome to the prototype API!");
});

//api call for rating Average
router.get("/api/ratingaverage/json", (req, res) => {
  const itemId = parseInt(req.query.id); //extract id from http request
  const item = items.find(e => e.id === itemId); //find the item with itemID
  if (!item) res.send(404); //item not found
  //create json object using item. Exclude reviews for item.
  res.json({
    id: item.id,
    name: item.name,
    average: item.average,
    ratingsCount: item.ratingsCount
  });
});

//api call for rating Reviews
router.get("/api/reviews/json", (req, res) => {
  const itemId = parseInt(req.query.id); //extract id from http request
  const item = items.find(e => e.id === itemId); //find the item with itemID
  if (!item) res.sendStatus(404); //item not found
  res.send(item); //return item
});

module.exports = router;
