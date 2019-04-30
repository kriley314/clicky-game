import React from "react";
import "./BirdCard.css";

const BirdCard = props => (
   <div className = {`card ${props.finish ? " finish":""}`} id = {props.id} onClick = {props.handleCardClick}>
   <img className = "card-img" src = {props.image} alt = "birds"/>
   </div>
);

export default BirdCard;