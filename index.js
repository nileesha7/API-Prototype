const express = require("express");
const app = express();

const reviews = [
  {
    id: 4507,
    title: "Best hockey team",
    average: 9.8,
    comment: "The purpose drives the word with an inform",
    reviewdBy: "Michel Spicer",
    createdDate: "2017-12-12 23:19:03"
  },
  {
    id: 5863,
    title: "This team cannot even win a game",
    average: 5,
    comment: "When can his tin consequence rend the treat?",
    reviewdBy: "Joe Doe",
    createdDate: "2018-03-25 15:09:22"
  },
  {
    id: 4450,
    title: "I am going to cheer for Toronto Maple Leafs",
    average: 2.2,
    comment: "The classic swallaows into an injured mystic",
    department: "John Pebble",
    createdDate: "2017-12-08 02:55:27"
  }
];
const items = [
  {
    id: 1,
    name: "Montreal Canadiens",
    average: 5.7,
    ratingsCount: 3,
    reviews: [reviews[0], reviews[2]]
  },
  {
    id: 2,
    name: "Toronto Canadiens",
    average: 2.1,
    ratingsCount: 4,
    reviews: reviews[1]
  }
];
app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.get("/api/ratingaverage/json", (req, res) => {
  const itemId = parseInt(req.query.id);
  const item = items.find(e => e.id === itemId);
  if (!item) res.status(404).send("The item with given id was not found");
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
  if (!item) res.status(404).send("The item with given id was not found");
  res.send(item);
});
app.listen(3000, () => console.log("App listening on port 3000..."));
