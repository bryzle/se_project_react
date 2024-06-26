import "./ItemModal.css";

function ItemModal({ activeModal, closeActiveModal, card, deleteCard }) {
  const handleDeleteClose = () => {
    deleteCard(card._id);
    
  };

  return (
    <div className={`modal ${activeModal === "preview" ? "modal_open" : ""}`}>
      <div className="modal__content modal__content-type-image">
        <button
          type="button"
          onClick={closeActiveModal}
          className=" modal__close_type_image"
        ></button>

        <img
          className="modal__preview_image"
          src={card.imageUrl}
          alt={card.name}
        />
        <div className="modal__footer">
          <div className="modal__wrapper">
            <h2 className="modal__caption">{card.name}</h2>
            <button
              onClick={handleDeleteClose}
              className="modal__delete"
              type="button"
            >
              Delete Item
            </button>
          </div>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
