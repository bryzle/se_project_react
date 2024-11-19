export const coordinates = {
  latitude: 40.74289,
  longitude: -73.97759,
};

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr.brandonlum.com"
    : "http://localhost:3001";

export const APIkey = "08abb2335b7e25ff9ca1c2ed39ad5797";

export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/day/clear.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "cloudy",
    url: new URL("../assets/day/cloudy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../assets/night/clear.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "cloudy",
    url: new URL("../assets/night/cloudy.png", import.meta.url).href,
  },
];

export const defaultWeatherOptions = {
  day: {
    url: new URL("../assets/day/clear.svg", import.meta.url).href,
  },
  night: {
    url: new URL("../assets/night/clear.png", import.meta.url).href,
  },
};
