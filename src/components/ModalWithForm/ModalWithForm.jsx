import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  closeActiveModal,
}) {
  return (
    <div className={`modal ${activeModal === "isOpen" ? "modal_open" : ""}`}>
      <form className="modal__form">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          onClick={closeActiveModal}
          className="modal__close"
        ></button>
        {children}
        <button className="modal__submit-button" type="button">
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default ModalWithForm;
