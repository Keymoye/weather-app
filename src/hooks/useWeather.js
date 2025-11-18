import { useEffect, useState } from "react";
import { getWeatherByCity } from "../services/weatherApi";

export default function useWeather(initialCity) {
  const [city, setCity] = useState(initialCity);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;

    console.log("[useWeather] Fetching weather for city:", city);
    setLoading(true);
    setError(null);

    try {
      const weather = await getWeatherByCity(city);
      console.log("[useWeather] API success:", weather);
      setData(weather);
    } catch (err) {
      console.error("[useWeather] Error:", err);
      setError(err.message || "Failed to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return { data, loading, error, refresh: fetchWeather, setCity };
}
