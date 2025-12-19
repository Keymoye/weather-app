import {
  WeatherError,
  CityNotFoundError,
  UnauthorizedError,
  NetworkError,
  UnknownWeatherError,
} from "./error.js";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeatherByCity = async (city) => {
  if (!city) {
    throw new Error("City name is required"); // programmer error
  }

  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

  console.log("[API] Request:", url);

  try {
    const res = await fetch(url);

    if (!res.ok) {
      switch (res.status) {
        case 404:
          throw new CityNotFoundError();
        case 401:
          throw new UnauthorizedError();
        default:
          throw new UnknownWeatherError();
      }
    }

    const data = await res.json();
    console.log("[API] Success:", data);

    return data;
  } catch (error) {
    console.error("[API] FAILED:", error);

    if (error instanceof WeatherError) {
      throw error; // known, intentional
    }

    throw new NetworkError(); // fetch failed / offline / timeout
  }
};
