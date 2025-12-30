import React, { useEffect, useState } from "react";
import HeritageItem from "../Components/HeritageItem";
import { useSearchParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function HeritagePage() {
  const [searchParams] = useSearchParams();
  const area = searchParams.get("area");

  const [heritageData, setHeritageData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = "http://localhost:5000/hh";
    if (area) url += `?areaName=${area}`;
    fetch(url)
      .then(res => res.json())
      .then(data => { setHeritageData(data);
                      setLoading(false);})
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [area]);

  return (
    <>
      <Navbar />
      
      <div>
        {loading && <p>Loading...</p>}

        {!loading && heritageData.length === 0 && (
          <p>No heritage found</p>
        )}

        {heritageData.map(item => (
          <HeritageItem
            key={item.heritage_id}
            name={item.title}
            images={item.images || []}
            story={item.story}
            cost={item.cost}
            weather={item.weather}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default HeritagePage;



