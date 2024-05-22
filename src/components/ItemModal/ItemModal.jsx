import "./ItemModal.css";

function ItemModal({ activeModal, closeActiveModal, card }) {
  return (
    <div className={`modal ${activeModal === "preview" ? "modal_open" : ""}`}>
      <div className="modal__content modal__content-type-image">
        <button
          type="button"
          onClick={closeActiveModal}
          className=" modal__close_type_image"
        ></button>

        <img className="modal__preview_image" src={card.link} alt={card.name} />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
