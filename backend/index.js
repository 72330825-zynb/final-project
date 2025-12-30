const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./connection");

const app = express();

app.use(cors());
app.use(express.json());

const placeRoutes = require("./routes/AddPlace");
app.use("/admin/places", placeRoutes);

const commentRoutes = require("./routes/comments");
app.use("/admin/comments", commentRoutes);


// Dashboard statistics
app.get("/admin/dashboard-stats", (req, res) => {
  const sql = `
    SELECT 
      SUM(CASE WHEN c.Category_Name = 'Restaurant' THEN 1 ELSE 0 END) AS restaurants,
      SUM(CASE WHEN c.Category_Name = 'Cafe' THEN 1 ELSE 0 END) AS cafes,
      SUM(CASE WHEN c.Category_Name = 'Heritage' THEN 1 ELSE 0 END) AS heritage
    FROM places p
    JOIN categories c ON p.Category_Id = c.Category_Id
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }
    res.json(result[0]);
  });
});



const placeee = require("./routes/places");
app.use("/admin/places" , placeee);

app.use("/images", express.static(path.join(__dirname, "images")));

app.get("/", (req, res) => {
  res.send("Backend is working ✅");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }
  const query = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length === 0) {
      return res.status(401).json({ message: "Email or password incorrect" });
    }

    const user = result[0];
    if (user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized" });
    }

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  });
});

app.get("/api/areas", (req, res) => {
  db.query("SELECT * FROM areas", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

app.get("/categories", (req, res) => {
  db.query("SELECT * FROM categories", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

app.get("/places", (req, res) => {
  const { areaName, categoryId } = req.query;

  let query = `
    SELECT p.*, a.Area_Name, c.Category_Name
    FROM places p
    JOIN areas a ON p.Area_Id = a.Area_Id
    JOIN categories c ON p.Category_Id = c.Category_Id
    WHERE 1=1
  `;
  const params = [];

  if (areaName) {
    query += " AND a.Area_Name = ?";
    params.push(areaName);
  }

  if (categoryId) {
    query += " AND p.Category_Id = ?";
    params.push(categoryId);
  }

  db.query(query, params, (err, places) => {
    if (err) return res.status(500).json(err);

    if (places.length === 0) return res.json([]);

    const placeIds = places.map(p => p.Place_Id);

    db.query(
      "SELECT * FROM comments WHERE Place_Id IN (?)",
      [placeIds],
      (err2, comments) => {
        if (err2) return res.status(500).json(err2);

        const data = places.map(p => ({
          ...p,
          comments: comments.filter(c => c.Place_Id === p.Place_Id),
        }));

        res.json(data);
      }
    );
  });
});

app.get("/hh", (req, res) => {
  const { areaName } = req.query;

  let sql = `
    SELECT 
      h.Heritage_Id,
      h.Heritage_Title,
      h.Story,
      h.Cost,
      h.Weather,
      h.Area_Id,
      h.Category_Id,
      hi.Image,
      a.Area_Name
    FROM heritage h
    LEFT JOIN heritage_image hi ON h.Heritage_Id = hi.Heritage_Id
    LEFT JOIN areas a ON h.Area_Id = a.Area_Id
  `;

  const params = [];

  if (areaName) {
    sql += " WHERE a.Area_Name = ?";
    params.push(areaName);
  }

  db.query(sql, params, (err, results) => {
    if (err) return res.status(500).json(err);

    const heritageMap = {};

    results.forEach(row => {
      const heritageId = row.Heritage_Id;

      if (!heritageMap[heritageId]) {
        heritageMap[heritageId] = {
          heritage_id: row.Heritage_Id,
          title: row.Heritage_Title,
          story: row.Story,
          cost: row.Cost,
          weather: row.Weather,
          area_id: row.Area_Id,
          category_id: row.Category_Id,
          area_name: row.Area_Name,
          images: [],
        };
      }

      if (row.Image && !heritageMap[heritageId].images.includes(row.Image)) {
        heritageMap[heritageId].images.push(row.Image);
      }
    });

    res.json(Object.values(heritageMap));
  });
});

app.get("/carousel", (req, res) => {
  db.query("SELECT * FROM carousel", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.get("/destinations", (req, res) => {
  db.query("SELECT * FROM destinations", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
