import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style/Managment.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Managment() {
  const [places, setPlaces] = useState([]);
  const [editingPlace, setEditingPlace] = useState(null);
  const [areas, setAreas] = useState([]);
  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchPlaces();
    fetchAreas();
    fetchCategories();
  }, []);
//get data lplace
  const fetchPlaces = async () => {
    const res = await axios.get("http://localhost:5000/admin/places");
    setPlaces(res.data);
  };

//get l area
  const fetchAreas = async () => {
    const res = await axios.get("http://localhost:5000/admin/places/areas/list");
    setAreas(res.data);
  };

  const fetchCategories = async () => {
    const res = await axios.get("http://localhost:5000/admin/places/categories/list");
    setCategories(res.data);
  };

  // DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    await axios.delete(`http://localhost:5000/admin/places/${id}`);
    setPlaces(places.filter((p) => p.Place_Id !== id));
  };

  // EDIT
  const handleEdit = (place) => {
    setEditingPlace(place);
  };

  // HANDLE FILE CHANGE
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  // UPDATE
  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("Title", editingPlace.Title);
    formData.append("Price", editingPlace.Price);
    formData.append("Menu", editingPlace.Menu);
    formData.append("Favorite", editingPlace.Favorite);
    formData.append("Area_Id", editingPlace.Area_Id);
    formData.append("Category_Id", editingPlace.Category_Id);
    if (file) formData.append("Image", file);

    await axios.put(`http://localhost:5000/admin/places/${editingPlace.Place_Id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    // Refresh list
    fetchPlaces();
    setEditingPlace(null);
    setFile(null);
  };

  return (
    <div className="management-container">
      <h2>Places Management</h2>

    
      {editingPlace && (
        <div className="edit-form">
          <label>Title</label>
          <input
            type="text"
            value={editingPlace.Title}
            onChange={(e) =>
              setEditingPlace({ ...editingPlace, Title: e.target.value })
            }
          />

          <label>Price</label>
          <input
            type="number"
            value={editingPlace.Price}
            onChange={(e) =>
              setEditingPlace({ ...editingPlace, Price: e.target.value })
            }
          />

          <label>Menu</label>
          <input
            type="text"
            value={editingPlace.Menu || ""}
            onChange={(e) =>
              setEditingPlace({ ...editingPlace, Menu: e.target.value })
            }
          />

          <label>Favorite</label>
          <input
            type="text"
            value={editingPlace.Favorite || ""}
            onChange={(e) =>
              setEditingPlace({ ...editingPlace, Favorite: e.target.value })
            }
          />

          <label>Image</label>
          <input type="file" onChange={handleFile} />

          <label>Area</label>
          <select
            value={editingPlace.Area_Id || ""}
            onChange={(e) =>
              setEditingPlace({ ...editingPlace, Area_Id: e.target.value })
            }
          >
            {areas.map((a) => (
              <option key={a.Area_Id} value={a.Area_Id}>
                {a.Area_Name}
              </option>
            ))}
          </select>

          <label>Category</label>
          <select
            value={editingPlace.Category_Id || ""}
            onChange={(e) =>
              setEditingPlace({ ...editingPlace, Category_Id: e.target.value })
            }
          >
            {categories.map((c) => (
              <option key={c.Category_Id} value={c.Category_Id}>
                {c.Category_Name}
              </option>
            ))}
          </select>

          <div className="form-actions">
            <button onClick={handleUpdate}>Save</button>
            <button onClick={() => setEditingPlace(null)}>Cancel</button>
          </div>
        </div>
      )}

      {/* TABLE */}
      <table className="custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
            <th>Rating</th>
            <th>Favorite</th>
            <th>Menu</th>
            <th>Area</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {places.map((place) => (
            <tr key={place.Place_Id}>
              <td>{place.Place_Id}</td>
              <td>{place.Title}</td>
              <td>
                {place.Image ? (
                  <img
                    src={`http://localhost:5000/images/${place.Image}`}
                    alt=""
                    width="60"
                  />
                ) : (
                  "-"
                )}
              </td>
              <td>{place.Rating}</td>
              <td>{place.Favorite}</td>
              <td>
                {place.Menu ? (
                  <a href={place.Menu} target="_blank" rel="noreferrer">
                    Link
                  </a>
                ) : (
                  "-"
                )}
              </td>
              <td>{place.Area_Name}</td>
              <td>{place.Category_Name}</td>
              <td>{place.Price}</td>
              <td className="actions">
                <EditIcon onClick={() => handleEdit(place)} />
                <DeleteIcon onClick={() => handleDelete(place.Place_Id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Managment;



