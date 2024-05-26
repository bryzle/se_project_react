import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { coordinates, APIkey } from "../../utils/constants.js";

function App() {
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

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((res) => {
        const filterData = filterWeatherData(res);
        setWeatherData(filterData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <ModalWithForm
          closeActiveModal={closeActiveModal}
          title="New garmet"
          buttonText="Add Garment"
          isOpen={activeModal === "add-garment"}
        >
          <label className="modal__label" htmlFor="name">
            Name
          </label>
          <input
            className="modal__input"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
          <label className="modal__label" htmlFor="link">
            Image
          </label>
          <input
            className="modal__image"
            type="url"
            name="link"
            id="link"
            placeholder="Image URL"
          />
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            <div className="modal__radio-container">
              <input
                type="radio"
                name="radio"
                className="modal__radio-input"
                id="Hot"
                value="Hot"
              />
              <label
                htmlFor="Hot"
                className="modal__input modal__input_type_radio modal__input_type_radio-hot"
              >
                Hot
              </label>
            </div>
            <div className="modal__radio-container">
              <input
                type="radio"
                className="modal__radio-input"
                name="radio"
                id="warm"
                value="warm"
              />

              <label
                htmlFor="warm"
                className="modal__input modal__input_type_radio"
              >
                Warm
              </label>
            </div>
            <div className="modal__radio-container">
              <input
                type="radio"
                className="modal__radio-input"
                name="radio"
                id="Cold"
                value="Cold"
              />

              <label
                htmlFor="Cold"
                className="modal__input modal__input_type_radio"
              >
                Cold
              </label>
            </div>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          closeActiveModal={closeActiveModal}
          activeModal={activeModal}
          card={selectedCard}
        />
        <Footer />
      </div>
    </div>
  );
}
export default App;
