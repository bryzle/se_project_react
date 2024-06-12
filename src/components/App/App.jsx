import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Profile from "../Profile/Profile.jsx";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { coordinates, APIkey } from "../../utils/constants.js";
import CurrentTemperatureUnitContext from "../Context/Context.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
    condition: "",
    isDay: true,
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const handleAddClick = () => setActiveModal("add-garment");
  const closeActiveModal = () => setActiveModal("");
  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const [clothingItems, setClothingItems] = useState([]);
  const onAddItem = (item) => {
    setClothingItems((prevItems) => [item, ...prevItems]);
    console.log(clothingItems);
  };
  const deleteCard = (id) => {
    console.log(clothingItems);
    console.log(id);
    setClothingItems((prevItems) => prevItems.filter((item) => item.id !== id));
    console.log(clothingItems);
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((res) => {
        setWeatherData(filterWeatherData(res));
      })
      .catch(console.error);
  }, []);

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  return (
    <div className="page">
      <div className="page__content">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                />
              }
            />

            {/* <Main weatherData={weatherData} handleCardClick={handleCardClick} /> */}

            <Route
              path="/profile"
              element={
                <Profile
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                />
              }
            />
            {/* <Route
              path="se_project_react"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                />
              }
            /> */}
          </Routes>
          <AddItemModal
            closeActiveModal={closeActiveModal}
            isOpen={activeModal === "add-garment"}
            onAddItem={onAddItem}
          />
          <ItemModal
            closeActiveModal={closeActiveModal}
            activeModal={activeModal}
            card={selectedCard}
            deleteCard={deleteCard}
          />
          <Footer />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </div>
  );
}
export default App;
