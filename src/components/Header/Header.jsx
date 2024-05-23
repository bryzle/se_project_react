import headerLogo from "../../assets/Logo.svg";
import "./Header.css";
import avatar from "../../assets/profile image.svg";

function Header({ handleAddClick, weatherData }) {
  const DateComponent = () => {
    const currentDate = new Date();
    const options = {
      month: "long",
      day: "numeric",
    };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);
    return (
      <h2 className="date">
        {formattedDate}, {weatherData.city}
      </h2>
    );
  };

  return (
    <header>
      <nav className="header">
        <img className="header__logo" src={headerLogo} alt="App Logo" />
        <DateComponent />

        <div className="header__user-container">
          <button
            className="header__add-clothes-btn"
            type="button"
            onClick={handleAddClick}
          >
            +Add Clothes
          </button>
          <p className="header__username">Terrence Tegegne</p>
          <img
            src={avatar}
            alt="App Profile Image"
            className="header__avatar"
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
