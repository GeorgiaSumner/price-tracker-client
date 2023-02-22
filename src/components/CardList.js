import React from "react";
import "../styles.css";
const CardList = ({ prices }) => {
  return (
    <div className="card-grid">
      {prices.map((price, index) => (
        <div key={index} className="card-container">
          <div>
            <li className="card-name">{price.card}</li>
            <li>{price.store} </li>
            <li
              className={
                Math.min(price.price)
                  ? "price-card-list-item lowest-price"
                  : "price-card-list-item"
              }
            >
              {price.price}
            </li>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
