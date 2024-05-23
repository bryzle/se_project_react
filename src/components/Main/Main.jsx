import { defaultClothingItems } from "../../utils/constants.js";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
function Main({ weatherData, handleCardClick }) {
  return (
    <>
      <main>
        <WeatherCard weatherData={weatherData} />
        <section className="cards">
          <p className="cards__text">
            Today is {weatherData.temp.F} &deg; F/ You may want to wear:
          </p>
          <ul className="cards__list">
            {defaultClothingItems
              .filter((item) => {
                return item.weather === weatherData.type;
              })
              .map((item) => {
                return (
                  <ItemCard
                    onCardClick={handleCardClick}
                    key={item._id}
                    item={item}
                  />
                );
              })}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;