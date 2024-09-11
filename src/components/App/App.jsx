import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Profile from "../Profile/Profile.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { coordinates, APIkey } from "../../utils/constants.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { getItems, addItems, deleteItems } from "../../utils/api.js";
import { signIn, signUp, checkToken } from "../../utils/auth.js";

function App() {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
    condition: "",
    isDay: true,
  });
  const [currentUser, setCurrentUser] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAddClick = () => setActiveModal("add-garment");
  const handleLogInClick = () => setActiveModal("add-login");
  const closeActiveModal = () => setActiveModal("");
  const handleSignUpClick = () => setActiveModal("add-register");
  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((res) => {
          setCurrentUser(res.user); // Assuming the response contains the user data
          setIsLoggedIn(true);
        })
        .catch((err) => console.error("Token check failed", err));
    }
  }, []);

  const onRegister = ({ name, avatar, email, password }) => {
    signUp(name, avatar, email, password)
      .then(() => {
        closeActiveModal();
        onSignIn({ email, password });
      })
      .catch((err) => {
        console.error(console.error("Registration failed", err));
      });
  };

  const onSignIn = ({ email, password }) => {
    signIn(email, password)
      .then((res) => {
        console.log(res);
        if (res.token) {
          localStorage.setItem("jwt", res.token); // Save the JWT token in localStorage
          setIsLoggedIn(true); // Update logged-in state
          setActiveModal(""); // Close the modal
          checkToken().then((userResponse) => {
            setCurrentUser(userResponse);
          });
        } else {
          throw new Error("Token not received");
        }
      })
      .catch((err) => console.error("Login failed", err));
  };

  const onSignOut = () => {
    localStorage.removeItem("jwt");
    setCurrentUser({});
    setIsLoggedIn(false);
  };

  const onAddItem = (item) => {
    console.log(item);
    addItems(item.name, item.link, item.weather)
      .then((newItem) => {
        setClothingItems((prevItems) => {
          return [newItem, ...prevItems];
        });
        closeActiveModal();
      })

      .catch(console.error);
  };

  const deleteCard = (id) => {
    deleteItems(id)
      .then(() => {
        setClothingItems(clothingItems.filter((card) => id !== card._id));
        closeActiveModal();
      })

      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((res) => {
        setWeatherData(filterWeatherData(res));
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="page">
        <div className="page__content">
          <CurrentTemperatureUnitContext.Provider
            value={{ currentTemperatureUnit, handleToggleSwitchChange }}
          >
            <Header
              isLoggedIn={isLoggedIn}
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              handleLogInClick={handleLogInClick}
              handleSignUpClick={handleSignUpClick}
            />
            <Routes>
              <Route
                path="*"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                  />
                }
              />

              {/* <Main weatherData={weatherData} handleCardClick={handleCardClick} /> */}

              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      weatherData={weatherData}
                      handleCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleAddClick={handleAddClick}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <AddItemModal
              closeActiveModal={closeActiveModal}
              isOpen={activeModal === "add-garment"}
              onAddItem={onAddItem}
            />
            <LoginModal
              closeActiveModal={closeActiveModal}
              isOpen={activeModal == "add-login"}
              handleRegisterModal={handleSignUpClick}
              onSignIn={onSignIn}
            />
            <RegisterModal
              closeActiveModal={closeActiveModal}
              isOpen={activeModal == "add-register"}
              onRegister={onRegister}
              handleLoginModal={handleLogInClick}
            />
            <ItemModal
              closeActiveModal={closeActiveModal}
              activeModal={activeModal}
              card={selectedCard}
              deleteCard={deleteCard}
            />
            <Footer />
          </CurrentTemperatureUnitContext.Provider>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
