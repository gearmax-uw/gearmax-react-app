import React, { Component } from 'react';
import { lazy } from "react";
import "./styles.css";
const Filter = lazy(() => import("../../components/Filter"));
const CarCardGrid = lazy(() => import("../../components/CarGrid"))

const Search = () => {
  return (
    <div className="gridWrapper">
      <div className="filterBox">
        <div className='StickySideBar'>
        <Filter></Filter>
        </div>
      </div>
      <div className="cardPageBox">
        <CarCardGrid></CarCardGrid>
      </div>
    </div>
  );
};

export default Search;
