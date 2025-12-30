
import React from "react";
function Imagecarousel({ img, text }) {
  return (
    <img
      className="d-block w-100"
      src={img}
      alt={text}
      style={{ height: "350px", objectFit: "cover" }} 
    />
  );
}

export default Imagecarousel;

