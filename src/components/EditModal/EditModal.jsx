import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../Hooks/useForm.js";
import { useEffect } from "react";

const EditModal = ({ isOpen, closeActiveModal, onEdit, currentUser }) => {
  const { values, handleChange, setValues } = useForm({
    name: "",
    avatar: "",
  });

  const { name, avatar } = values;
  function handleSubmit(e) {
    e.preventDefault();
    onEdit(values);
  }

  const currentName = currentUser.name;
  const currentAvatar = currentUser.avatar;

    useEffect(() => {
    if (currentUser) {
      setValues({ name: currentName, avatar: currentAvatar });
    }
  }, currentUser); 

  return (
    <ModalWithForm
      closeActiveModal={closeActiveModal}
      name="edit"
      title="Change Profile Data"
      buttonText="Edit Item"
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" htmlFor="edit-name">
        Name
      </label>
      <input
        className="modal__input"
        type="text"
        name="name"
        id="edit-name"
        placeholder={"Name"}
        value={name}
        onChange={handleChange}
        required
      />
      <label className="modal__label" htmlFor="edit-avatar">
        Image
      </label>
      <input
        className="modal__image"
        type="text"
        name="avatar"
        id="edit-avatar"
        placeholder={"Placeholder"}
        value={avatar}
        onChange={handleChange}
        required
      />
    </ModalWithForm>
  );
};

export default EditModal;
