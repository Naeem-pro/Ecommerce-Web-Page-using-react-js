import React, { Component } from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ products }) => {
  const cards = products.map((product, index) => (
    <Card
      key={index}
      title={product.title}
      price={product.price}
      image={product.image}
      id={product.id}
     
    />
  ));
  return <div className="card-list">{cards}</div>;
};

export default CardList;
