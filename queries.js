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

const createUser = (req, res) => {
  const { name, email } = req.body;
  pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    [name, email],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send("User added");
    }
  );
};

const editUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send("User edited");
    }
  );
};

const deleteUser = (req, res) => {
  id = req.params.id;
  pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send("User deleted");
  });
};

module.exports = { getUsers, getUserById, createUser, editUser, deleteUser };
