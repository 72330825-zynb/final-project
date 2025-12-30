import axios from "axios";
import React, { useEffect, useState } from "react";

function AreaDropdown() {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/areas")  // backend endpoint
      .then((res) => setAreas(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <select id="area-select">
      <option>All Areas</option>
      {areas.map((areas) => (
        <option key={areas.Area_Id} value={areas.Area_Name}>{areas.Area_Name}</option>
      ))}
    </select>
  );
}

export default AreaDropdown;