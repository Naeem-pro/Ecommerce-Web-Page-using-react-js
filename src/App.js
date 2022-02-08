import React, { Component } from "react";
import { useState } from "react";
import Card from "./Card";
import CardList from "./CardList";
import TrendsList from "./TrendsList";
import { products } from "./components/Products";
import { trends } from "./components/Trends";
import SearchField from "./Search";
import "./App.css";

function App() {
  const [stateProducts, setStateProducts] = useState(products);

  const onSearchChange = (event) => {
    const tempProducts = products.filter((Product) => {
      return Product.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setStateProducts(tempProducts);
  };
  return (
    <>
      <h1
        style={{
          fontFamily: "-moz-initial",
          paddingLeft: "35px",
          paddingTop: "5px",
        }}
      >
        Fashions Trends
      </h1>
      <TrendsList trends={trends} />
      <h1
        style={{
          fontFamily: "-moz-initial",
          paddingLeft: "35px",
          paddingTop: "5px",
        }}
      >
        Holidays Deals
      </h1>
      <div className="App">
        <SearchField onSearchChange={onSearchChange} />
        <CardList products={stateProducts} />
      </div>
    </>
  );
}

export default App;
