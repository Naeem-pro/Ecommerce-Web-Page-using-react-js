import React, { Component } from "react";
import Card from "./Card";
import "./CardList.css";

const TrendsList = ({ trends }) => {
  const fashiontrends = trends.map((trend, index) => (
    <Card key={index} title={trend.title} image={trend.image} id={trend.id} />
  ));
  return <div className="trend-list">{fashiontrends}</div>;
};

export default TrendsList;
