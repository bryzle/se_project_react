import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const handleAddClick = () => setActiveModal("add-garment");
  const closeActiveModal = () => setActiveModal("");
  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  return (
    <div className="page">
      <div className="page__content">
        <>
          <Header handleAddClick={handleAddClick} />
          <Main weatherData={weatherData} handleCardClick={handleCardClick} />
          <ModalWithForm
            closeActiveModal={closeActiveModal}
            title="New garmet"
            buttonText="Add Garment"
            activeModal={activeModal}
          >
            <label className="modal__label" htmlFor="name">
              Name:
            </label>
            <input
              className="modal__input"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
            <label className="modal__label" htmlFor="link">
              Type:
            </label>
            <input
              className="modal__image"
              type="url"
              name="link"
              placeholder="Image URL"
            />
            <fieldset className="modal__radio-buttons">
              <legend className="modal__legend">
                Select the weather type:
              </legend>

              <label
                htmlFor="Hot"
                className="modal__input modal__input_type_radio modal__input_type_radio-hot"
              >
                <input
                  type="radio"
                  className="modal__radio-input"
                  id="Hot"
                  value="Hot"
                />
                Hot
              </label>

              <label
                htmlFor="warm"
                className="modal__input modal__input_type_radio"
              >
                <input type="radio" id="warm" value="warm" />
                Warm
              </label>

              <label
                htmlFor="Cold"
                className="modal__input modal__input_type_radio"
              >
                <input type="radio" id="Cold" value="Cold" />
                Cold
              </label>
            </fieldset>
          </ModalWithForm>
          <ItemModal
            closeActiveModal={closeActiveModal}
            activeModal={activeModal}
            card={selectedCard}
          />
          <Footer />
        </>
      </div>
    </div>
  );
}
export default App;
