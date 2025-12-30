const express = require("express");
const router = express.Router();
const db = require("../connection");

router.post("/", (req, res) => {
  const {
    title,
    image,
    rating,
    menu,
    area_id,
    category_id,
    price,
  } = req.body;

  const sql = `
    INSERT INTO places 
    (Title, Image, Rating, Menu, Area_Id, Category_Id, Price)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [title, image, rating, menu, area_id, category_id, price],
    (err, result) => {
      if (err) {
        console.log("DB ERROR:", err);
        return res.status(500).json(err);
      }
      res.status(201).json({ message: "Place added successfully" });
    }
  );
});

module.exports = router;