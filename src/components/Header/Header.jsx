import React, { useContext } from "react";
import headerLogo from "../../assets/Logo.svg";
import "./Header.css";
import avatar from "../../assets/profile image.svg";
import { NavLink } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  handleLogInClick,
  handleSignUpClick,
  weatherData,
  isLoggedIn,
}) {
  const { currentUser } = useContext(CurrentUserContext);

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

  const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };

  const profileLogin = (isLoggedIn) => {
    if (isLoggedIn) {
      return (
        <>
          <button
            className="header__add-clothes-btn"
            type="button"
            onClick={handleSignUpClick}
          >
            +Add Clothes
          </button>
          <p className="header__username">{currentUser.name}</p>
          <NavLink to="/profile">
            {currentUser.avatar ? (
              <img
                src={currentUser.avatar}
                alt="User Avatar"
                className="header__avatar"
              />
            ) : (
              <div className="header__avatar-placeholder">
                {getInitials(currentUser.name)}
              </div>
            )}
          </NavLink>
        </>
      );
    } else {
      return (
        <>
          <button
            className="header__sign-up-btn"
            type="button"
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
          <button
            className="header__log-in-btn"
            type="button"
            onClick={handleLogInClick}
          >
            Log In
          </button>
        </>
      );
    }
  };

  return (
    <header>
      <nav className="header">
        <NavLink to="/">
          <img className="header__logo" src={headerLogo} alt="App Logo" />
        </NavLink>
        <DateComponent />

        <div className="header__user-container">
          <ToggleSwitch />

          {profileLogin(isLoggedIn)}
        </div>
      </nav>
    </header>
  );
}

export default Header;
