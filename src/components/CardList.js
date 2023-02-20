import React from "react";
import "../styles.css";
const CardList = ({ prices }) => {
  return (
    <div className="card-grid">
      {prices.map((price, index) => (
        <div className="card-container">
          <div className="price-card-list-item">
            {price.card}
            {price.store} {price.price}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
