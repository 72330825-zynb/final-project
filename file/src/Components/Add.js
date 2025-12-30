import { useState, useEffect } from "react";
import axios from "axios";
import '../Style/Add.css';

const Add = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    rating: "",
    menu: "",
    area_id: "",
    category_id: "",
    price: "",
  });

  const [areas, setAreas] = useState([]);
  const [categories, setCategories] = useState([]);

  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const areasRes = await axios.get("http://localhost:5000/api/areas");
        const categoriesRes = await axios.get("http://localhost:5000/categories");
        setAreas(areasRes.data);
        setCategories(categoriesRes.data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchData();
  }, []);





  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    try {
      await axios.post("http://localhost:5000/admin/places", {
        ...formData,
        rating: Number(formData.rating),
        area_id: Number(formData.area_id),
        category_id: Number(formData.category_id),
        price: Number(formData.price),
      });
      alert(" Place added successfully ");
      setFormData({
        title: "",
        image: "",
        rating: "",
        menu: "",
        area_id: "",
        category_id: "",
        price: "",
      });
    } catch (err) {
      console.error("ADD ERROR:", err.response?.data || err.message);
    }
  };

  return (
    <div className="add-container">
      <h2>Add Place</h2>

      <div className="form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleChange}
        />

        <input
          type="text"
          name="menu"
          placeholder="Menu"
          value={formData.menu}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />

        {/* hun 3m e3ml dropdown ll area*/}
        <select name="area_id" value={formData.area_id} onChange={handleChange}>
          <option value="">Select Area</option>
          {areas.map(area => (
            <option key={area.Area_Id} value={area.Area_Id}>
              {area.Area_Name}
            </option>
          ))}
        </select>

        {/* dropdown ll category*/}
        <select name="category_id" value={formData.category_id} onChange={handleChange}>
          <option value="">Select Category</option>
          {categories.map(cat => (
            <option key={cat.Category_Id} value={cat.Category_Id}>
              {cat.Category_Name}
            </option>
          ))}
        </select>
      </div>

      {/* Preview */}
      <h3>Preview</h3>
      <div className="preview-card">
        {formData.image && <img src={formData.image} alt="preview" />}
        <h4>{formData.title || "Title here"}</h4>
        <p>⭐ {formData.rating || "0"}</p>
        <p className="menu">{formData.menu || "Menu here"}</p>
        <p>💲 {formData.price || "0"}</p>
        <p>🌍 {formData.area_id ? areas.find(a => a.Area_Id === Number(formData.area_id))?.Area_Name : "Area"}</p>
        <p>📂 {formData.category_id ? categories.find(c => c.Category_Id === Number(formData.category_id))?.Category_Name : "Category"}</p>
      </div>

      <button className="add-btn" onClick={handleAdd}>
        + Add Place
      </button>
    </div>
  );
};

export default Add;