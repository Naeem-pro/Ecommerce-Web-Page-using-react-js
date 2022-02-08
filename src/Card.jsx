import React, { Component } from "react";
import "./CardList.css";

const Card = ({ title, price, image, id }) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="info">
        {title.length > 0 && <h2>{title}</h2>}
        <h2 style={{ color: "green" }}>{price}</h2>
      </div>
    </div>
  );
};

export default Card;
