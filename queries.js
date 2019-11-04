//use pg module to create a pool of connections. This way, we don't have to open and close client everytime we make a query
const pg = require("pg");
const Pool = pg.Pool;

const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "reviewsdb",
  password: "password",
  port: 5432
});

const getUsers = (req, res) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  pool.query(
    "SELECT * FROM users WHERE ID = $1",
    [userId],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};
module.exports = { getUsers, getUserById };
