import { useEffect, useState, useRef } from "react";
import axios from "axios";

// simple helper for formatting API URL
const buildURL = (city) =>
  `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${city}&aqi=no`;

export default function useWeather(defaultCity = "Nairobi") {
  const [city, setCity] = useState(defaultCity);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const cancelSource = useRef(null);

  useEffect(() => {
    let ignore = false;

    async function fetchWeather() {
      setLoading(true);
      setError(null);

      // cancel previous request
      if (cancelSource.current) {
        cancelSource.current.cancel("New search triggered");
      }

      cancelSource.current = axios.CancelToken.source();

      try {
        const response = await axios.get(buildURL(city), {
          cancelToken: cancelSource.current.token,
        });

        if (!ignore) {
          setData(response.data);
        }
      } catch (err) {
        if (axios.isCancel(err)) return;

        if (!ignore) {
          setError("could not fetch weather data");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchWeather();

    return () => {
      ignore = true;
      if (cancelSource.current) {
        cancelSource.current.cancel();
      }
    };
  }, [city]);

  return { city, setCity, data, loading, error };
}
