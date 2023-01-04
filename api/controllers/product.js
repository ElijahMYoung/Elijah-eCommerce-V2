// import { db } from "../db.js";

// export const getProducts = (req, res) => {
//   const q = req.query
//     ? "SELECT * FROM products.products;"
//     : "SELECT * FROM products.products;";
//   db.query(q, [req.query], (err, data) => {
//     if (err) return res.send(err);

//     return res.status(200).json(data);
//   });
// };
// export const getProduct = (req, res) => {
//   res.json("from controller");
// };
