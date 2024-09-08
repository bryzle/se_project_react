import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../Hooks/useForm.js";

const RegisterModal = ({ isOpen, closeActiveModal }) => {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const { email, password, name, avatar } = values;

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values);
  }

  return (
    <ModalWithForm
      closeActiveModal={closeActiveModal}
      title="Sign Up"
      buttonText="Next"
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" htmlFor="register-email">
        Email*
      </label>
      <input
        className="modal__input"
        type="text"
        name="email"
        id="register-email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
        required
        autoComplete="username"
      />
      <label className="modal__label" htmlFor="register-password">
        Password*
      </label>
      <input
        className="modal__image"
        type="password"
        name="password"
        id="register-password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
        required
        autoComplete="new-password"
      />
      <label className="modal__label" htmlFor="register-name">
        Name
      </label>
      <input
        className="modal__input"
        type="text"
        name="name"
        id="register-name"
        placeholder="Name"
        value={name}
        onChange={handleChange}
        required
      />
      <label className="modal__label" htmlFor="register-avatar">
        Avatar URL
      </label>
      <input
        className="modal__input"
        type="url"
        name="Avatar"
        id="register-avatar"
        placeholder="Avatar URL"
        value={avatar}
        onChange={handleChange}
        required
      />
    </ModalWithForm>
  );
};
export default RegisterModal;
