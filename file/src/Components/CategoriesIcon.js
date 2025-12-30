import axios from "axios";
import React, { useEffect, useState } from "react";
import {ForestRounded,RestaurantRounded,LocalCafe,Castle,Tsunami} from "@mui/icons-material";

const iconMap = {
  Nature: <ForestRounded />,
  Restaurant: <RestaurantRounded />,
  Cafe: <LocalCafe />,
  Heritage: <Castle />,
  Waters: <Tsunami />
};

      function CategoriesIcon({ onSelect }) {
      const [categories, setCategories] = useState([]);


  //bde jeb l categories mn l database    
  useEffect(() => {
    axios.get("http://localhost:5000/categories")
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="filter-icons">
      {categories.map(cat => (
        <div
          key={cat.Category_Id}
          className="icon-wrapper"
          onClick={() => onSelect(cat.Category_Name)}
        >
          <div className="icon-circle">
            {iconMap[cat.Category_Name]}
          </div>
          <p>{cat.Category_Name}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoriesIcon;