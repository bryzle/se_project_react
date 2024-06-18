import React, { useState } from "react";
import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { useForm } from "../../Hooks/useForm.js";

// onAddItem refers to handleAddItemSubmit, which is declared in App.js
const AddItemModal = ({ isOpen, onAddItem, closeActiveModal }) => {
  const { values, handleChange } = useForm({ name: "", link: "", weather: "" });

  const { name, link, weather } = values;

  /* const [name, setName] = React.useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const [link, setLink] = React.useState("");
  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };
  const [weather, setWeatherType] = React.useState("");
  const handleWeatherTypeChange = (e) => {
    setWeatherType(e.target.value); */
  /* }; */
  // declare state for each input field

  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened

  // create onChange handlers corresponding to each state variable

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({ name, link, weather });
  }

  return (
    <ModalWithForm
      closeActiveModal={closeActiveModal}
      title="New garmet"
      buttonText="Add Garment"
      isOpen={isOpen}
      onSubmit={handleSubmit}
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
        value={name}
        onChange={handleChange}
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
        value={link}
        onChange={handleChange}
      />
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <div className="modal__radio-container">
          <input
            type="radio"
            name="weather"
            className="modal__radio-input"
            id="Hot"
            value="Hot"
            onChange={handleChange}
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
            name="weather"
            id="warm"
            value="warm"
            onChange={handleChange}
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
            name="weather"
            id="Cold"
            value="Cold"
            onChange={handleChange}
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
  );
};

export default AddItemModal;
