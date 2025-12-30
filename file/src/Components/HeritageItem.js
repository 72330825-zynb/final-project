import React, { useState } from "react";
import { Carousel, Accordion, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Heritage.css";

function HeritageItem({ name, images = [], story, cost, weather }) {
  const [showStory, setShowStory] = useState(false);

  // 🔥 فلترة الصور (المفتاح)
  const validImages = images.filter(img => img && img !== "null");

  return (
    <div className="heritage-card">

    
      <div className="heritage-left">
        {validImages.length > 0 ? (
          <Carousel>
     {validImages.map((img, index) => (
     <Carousel.Item key={index}>
                <img
                  className="d-block w-100 heritage-image"
                  src={`http://localhost:5000/images/${img}`}
                  alt={`slide-${index}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <p>No images available</p>
        )}
      </div>

      {/* Right - Content */}
      <div className="heritage-right" style={{ fontFamily: "Lexend" }}>
        <h2 className="her">{name}</h2>

        <Button
          onClick={() => setShowStory(!showStory)}
          className="story-btn mb-3"
        >
          Story
        </Button>

        {showStory && <p className="story-text">{story}</p>}

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Cost</Accordion.Header>
            <Accordion.Body>{cost}</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Weather</Accordion.Header>
            <Accordion.Body>{weather}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

    </div>
  );
}

export default HeritageItem;

