import React from "react";
import { OverlayTrigger, Button, Popover } from "react-bootstrap";
import "../Style/DestinationItem.css";

function DestinationItem({ image, name, location, details }) {
  const disc = (
    <Popover>
      <Popover.Header>{name}</Popover.Header>
      <Popover.Body>{details}</Popover.Body>
    </Popover>
  );

  return (
    <div className="menuItem">
      <div
        className="menuItem-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <h1 style={{ fontSize: "20px", color: "black", fontWeight: "bold" }}>
        {name}
      </h1>
      <p>{location}</p>
      <p>—————————————————————————</p>

      <OverlayTrigger trigger="click" placement="top" overlay={disc}>
        <Button className="discoverrr text-as-paragraph">Discover</Button>
      </OverlayTrigger>
    </div>
  );
}

export default DestinationItem;


