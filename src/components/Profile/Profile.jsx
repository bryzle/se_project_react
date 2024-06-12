import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import react from "react";
import "./Profile.css";
function Profile({ weatherData, handleCardClick }) {
  return (
    <div className="profile__page">
      <SideBar weatherData={weatherData} />

      <ClothesSection
        weatherData={weatherData}
        handleCardClick={handleCardClick}
      />
    </div>
  );
}
export default Profile;
