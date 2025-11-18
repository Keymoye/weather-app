import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeatherByCity = async (city) => {
  if (!city) throw new Error("City name is required");

  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

  console.log("[API] Request:", url);

  try {
    const { data } = await axios.get(url);
    console.log("[API] Success:", data);
    return data;
  } catch (error) {
    console.error("[API] FAILED - using fallback mock data:", error);
    throw new Error(error.response?.data?.message || "API request failed");
  }
};
