import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import axios from "axios";


function CarouselImage() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/carousel")
      .then(res => setSlides(res.data))
      .catch(err => console.log(err));
  }, []);





  return (
    <Carousel className="custom-carousel">
      {slides.map((slide) => (
        <Carousel.Item key={slide.Carousel_Id}>
      <img className="d-block w-100"
        src={`http://localhost:5000/images/${slide.Carousel_Image}`}
        alt={slide.Title}/>

          <Carousel.Caption>
            <h3>{slide.Title}</h3>
            <p>{slide.Descreption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselImage;