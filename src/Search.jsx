import React, { Component } from "react";
import "./CardList.css";

const SearchField = ({ onSearchChange }) => {
  return (
    <input
      className="search-field"
      type="search"
      placeholder="Search product"
      onChange={(event) => onSearchChange(event)}
    />
  );
};

export default SearchField;
