import React, { useEffect, useState } from "react";
import DestinationItem from "./DestinationItem"; // نفس component القديم
import axios from "axios";

function Destination() {
  const [destinations, setDestinations] = useState([]);



  //get data ldestination
  useEffect(() => {
    axios.get("http://localhost:5000/destinations")
      .then(res => setDestinations(res.data))
      .catch(err => console.log(err));
  }, []);



  return (
    <>
      <div className="red-section"></div>

      <h2 style={{ fontWeight: "bold", fontFamily: "Trocchi", marginTop: "50px", marginLeft: "30px" }}>
        Featured destinations
      </h2>

      <div className="destination-list d-flex gap-2 overflow-auto px-4 py-4">
        {destinations.map(dest => (
          <div className="flex-shrink-0" key={dest.Destinations_Id}>
            <DestinationItem
              image={`http://localhost:5000/images/${dest.Image}`} // رابط كامل للصورة
              name={dest.Name}
              location={dest.Location}
              details={dest.Details}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Destination;
