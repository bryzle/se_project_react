import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../Hooks/useForm.js";

const LoginModal = ({ isOpen, closeActiveModal }) => {
  const { values, handleChange } = useForm({ email: "", password: "" });

  const { email, password } = values;

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");
  }

  return (
    <ModalWithForm
      closeActiveModal={closeActiveModal}
      title="Login"
      buttonText="Log in"
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" htmlFor="login-email">
        Email
      </label>
      <input
        className="modal__input"
        type="text"
        name="email"
        id="login-email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
        autoComplete="username"
      />
      <label className="modal__label" htmlFor="login-password">
        Password
      </label>
      <input
        className="modal__image"
        type="password"
        name="password"
        id="login-password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
        autoComplete = "current-password"
      />
    </ModalWithForm>
  );
};
export default LoginModal;
