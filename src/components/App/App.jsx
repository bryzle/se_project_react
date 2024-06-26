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
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";
import { Routes, Route } from "react-router-dom";
import { getItems, addItems, deleteItems } from "../../utils/api.js";

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
    console.log(item);
    addItems(item.name, item.link, item.weather)
      .then((newItem) => {
        setClothingItems((prevItems) => {
          return [newItem, ...prevItems];
        });
        closeActiveModal();
      })

      .catch(console.error);
  };

  const deleteCard = (id) => {
    deleteItems(id)
      .then(() => {
        setClothingItems(clothingItems.filter((card) => id !== card._id));
        closeActiveModal();
      })

      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((res) => {
        setWeatherData(filterWeatherData(res));
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

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
                  clothingItems={clothingItems}
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
                  clothingItems={clothingItems}
                  handleAddClick={handleAddClick}
                />
              }
            />
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
