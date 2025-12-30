const express = require("express");
const router = express.Router();
const db = require("../connection");

// GET all comments for a specific place
router.get("/:placeId", (req, res) => {
  const { placeId } = req.params;
  db.query(
    "SELECT * FROM comments WHERE Place_Id = ?",
    [placeId],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
});

// DELETE a comment
router.delete("/:commentId", (req, res) => {
  const { commentId } = req.params;
  db.query(
    "DELETE FROM comments WHERE Comment_Id = ?",
    [commentId],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Comment deleted" });
    }
  );
});

// UPDATE a comment
router.put("/:commentId", (req, res) => {
  const { commentId } = req.params;
  const { Text } = req.body;
  db.query(
    "UPDATE comments SET Text = ? WHERE Comment_Id = ?",
    [Text, commentId],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Comment updated" });
    }
  );
});

module.exports = router;
