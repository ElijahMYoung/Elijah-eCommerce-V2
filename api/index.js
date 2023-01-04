import express from "express";
import mysql from "mysql";
const app = express();

app.use(express.json());

// app.get("/test", (req, res) => {
//   res.json("It works");
// });

// app.listen(8800, () => {
//   console.log("connected");
// });

export const connection = mysql.createConnection({
  host: "localhost",
  user: "devuser",
  password: "password",
  database: "products",
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.get("/products", (req, res) => {
  connection.query("SELECT * FROM items", (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(8800, () => {
  console.log("Server listening on port 8800");
});
