import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import CoffeeItem from "../Components/CoffeItem";
import { Container, Row, Col } from "react-bootstrap";

function Cafe() {
  const [searchParams] = useSearchParams();
  const selectedArea = searchParams.get("area");
  const categoryId = searchParams.get("category") || 3;

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    if (!selectedArea) return;

    axios.get(`http://localhost:5000/places?areaName=${encodeURIComponent(
          selectedArea
        )}&categoryId=${categoryId}`
      )
      .then(res => setPlaces(res.data))
      .catch(err => console.log(err));
  },
 [selectedArea, categoryId]);

  return (
    <Container className="mt-5">
      <h2>{selectedArea} Coffee Places</h2>

      <Row className="g-4">
        {places.map(place => (
          <Col xs={12} md={4} key={place.Place_Id}>
            <CoffeeItem
              title={place.Title}
              image={`http://localhost:5000/images/${place.Image}`}
              rating={place.Rating}
              favorite={place.Favorite}
              comments={place.comments}
              menu={place.Menu}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cafe;
