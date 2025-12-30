const express = require("express");
const router = express.Router();
const db = require("../connection");
const multer = require("multer");
const path = require("path");

// Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "images/"),
  filename: (req, file, cb) =>
    cb(null, file.originalname + "_" + Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage: storage });

// GET all places
router.get("/", (req, res) => {
  const query = `
    SELECT 
      p.Place_Id,
      p.Title,
      p.Image,
      p.Rating,
      p.Favorite,
      p.Menu,
      p.Area_Id,
      a.Area_Name,
      p.Category_Id,
      c.Category_Name,
      p.Price
    FROM places p
    JOIN areas a ON p.Area_Id = a.Area_Id
    JOIN categories c ON p.Category_Id = c.Category_Id
    ORDER BY p.Place_Id ASC
  `;
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// DELETE place
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM places WHERE Place_Id = ?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Deleted successfully" });
  });
});

// UPDATE place (with image)
router.put("/:id", upload.single("Image"), (req, res) => {
  const { id } = req.params;
  const { Title, Price, Menu, Favorite, Area_Id, Category_Id } = req.body;
  const Image = req.file ? req.file.filename : req.body.Image; // Keep old if no new

  const query = `
    UPDATE places
    SET Title=?, Price=?, Menu=?, Favorite=?, Image=?, Area_Id=?, Category_Id=?
    WHERE Place_Id=?
  `;

  db.query(
    query,
    [Title, Price, Menu, Favorite, Image, Area_Id, Category_Id, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Updated successfully" });
    }
  );
});

// GET all areas
router.get("/areas/list", (req, res) => {
  db.query("SELECT * FROM areas", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// GET all categories
router.get("/categories/list", (req, res) => {
  db.query("SELECT * FROM categories", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

module.exports = router;


