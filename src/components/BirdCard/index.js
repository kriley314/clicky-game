import React from "react";
import "./style.css";

function BirdCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
        </ul>
      </div>
      <span onClick={() => props.clicked = true}></span>
    </div>
  );
}

export default BirdCard;
