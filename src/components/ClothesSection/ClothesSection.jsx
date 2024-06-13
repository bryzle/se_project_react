import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard.jsx";
import React from "react";

function ClothesSection({ weatherData,handleCardClick,clothingItems }) {
  return (
    <div className="clothesSection__page">
      <div className="clothesSection__nav">
        <p className="clothesSection__title">Your Items</p>
        <button className="clothesSection__add-new-btn" type="button">
          + Add new
        </button>
      </div>
      <ul className="clothesSection__list">
        {clothingItems
          .filter((item) => {
            return item.weather === weatherData.type;
          })
          .map((item) => {
            return (
              <ItemCard
                onCardClick={handleCardClick}
                key={item._id}
                item={item}
              />
            );
          })}
      </ul>
    </div>
  );
}


export default ClothesSection;
