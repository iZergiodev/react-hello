import React from "react";
import Card from "./Card";

const CardContainer = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex flex-wrap justify-content-center gap-5">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardContainer;
