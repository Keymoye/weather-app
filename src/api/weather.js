import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = process.env.REACT_APP_OPENWEATHER_KEY || "";

if (!API_KEY) {
  // Don't throw; just warn so dev knows to add .env during development.
  // In production you'll move this to a backend proxy.
  // eslint-disable-next-line no-console
  console.warn(
    "REACT_APP_OPENWEATHER_KEY is not set. Add it to your .env file."
  );
}

async function request(url, params = {}) {
  try {
    const res = await axios.get(url, {
      params: { appid: API_KEY, units: "metric", ...params },
    });
    return res.data;
  } catch (err) {
    // Normalize error shape for the state layer
    const message =
      err.response?.data?.message || err.message || "Unknown error";
    const status = err.response?.status || 500;
    const error = new Error(message);
    error.status = status;
    throw error;
  }
}

export async function getCurrentWeather(city) {
  if (!city) throw new Error("City is required");
  const url = `${BASE_URL}/weather`;
  return await request(url, { q: city });
}

export async function getForecast(city) {
  if (!city) throw new Error("City is required");
  const url = `${BASE_URL}/forecast`;
  return await request(url, { q: city });
}

export default {
  getCurrentWeather,
  getForecast,
};
