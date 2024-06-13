import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import react from "react";
import "./Profile.css";
function Profile({ weatherData, handleCardClick,clothingItems }) {
  return (
    <div className="profile__page">
      <SideBar weatherData={weatherData} />

      <ClothesSection
        weatherData={weatherData}
        handleCardClick={handleCardClick}
        clothingItems = {clothingItems}
      />
    </div>
  );
}
export default Profile;
