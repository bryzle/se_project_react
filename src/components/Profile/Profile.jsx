import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import react from "react";
import "./Profile.css";
function Profile({
  weatherData,
  handleCardClick,
  clothingItems,
  handleAddClick,
  onSignOut,
}) {
  return (
    <div className="profile__page">
      <SideBar weatherData={weatherData} onSignOut={onSignOut} />

      <ClothesSection
        weatherData={weatherData}
        handleCardClick={handleCardClick}
        clothingItems={clothingItems}
        handleAddClick={handleAddClick}
      />
    </div>
  );
}
export default Profile;
