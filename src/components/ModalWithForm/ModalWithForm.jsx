import "./ModalWithForm.css";


function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  closeActiveModal,
  orModal,
  onSubmit,
  spanText
}) {
  return (
    <div className={`modal ${isOpen ? "modal_open" : ""}`}>
      <form className="modal__form" onSubmit={onSubmit}>
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          onClick={closeActiveModal}
          className="modal__close"
        ></button>
        {children}
        <button className="modal__submit-button" type="submit">
          {buttonText}
        </button>
        <button className="modal__span-button" onClick={orModal}>
          {spanText}
        </button>
      </form>
    </div>
  );
}

export default ModalWithForm;
