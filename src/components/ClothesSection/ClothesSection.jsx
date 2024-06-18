import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard.jsx";
import React from "react";

function ClothesSection({
  weatherData,
  handleCardClick,
  clothingItems,
  handleAddClick,
}) {
  
  return (
    <div className="clothesSection__page">
      <div className="clothesSection__nav">
        <p className="clothesSection__title">Your Items</p>
        <button
          className="clothesSection__add-new-btn"
          type="button"
          onClick={handleAddClick}
        >
          + Add new
        </button>
      </div>

      <ul className="clothesSection__list">
        {clothingItems
          .filter((item) => {
            return item;
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
