# Build a prototype API using Express and Nodejs

A simple API returning the rating average and reviews for an item.
This API implements 2 simple calls:
    1) Ratings Average: This API call will return the rating average for an item along with its Id, name and rating count. The return will        be in JSON format.
    2) Reviews: This API call will return all the reviews or an item in JSON format.
## Installation

    - Install Node and npm
    - Clone the repository
    - To start server: node app

## Test Prototype API
    
    - Open http://localhost:3000 on your web browser
    - To test rating average for item # 1: http://localhost:3000/api/ratingaverage/json?id=1
    - To test reviews for item # 1: http://localhost:3000/api/reviews/json?id=1

