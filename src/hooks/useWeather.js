import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getWeatherByCity } from "../services/weatherApi";
import { CityNotFoundError, NetworkError } from "../services/error.js";

export default function useWeather(initialCity) {
  const [city, setCity] = useState(initialCity);

  const query = useQuery({
    queryKey: ["weather", city],
    queryFn: () => getWeatherByCity(city),
    enabled: !!city,
    staleTime: 10 * 60 * 1000,
    retry: (count, error) => {
      if (error instanceof CityNotFoundError) return false;
      if (error instanceof NetworkError) return true;
      return count < 2;
    },
  });

  return {
    city,
    setCity,
    data: query.data,
    error: query.error,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    refetch: query.refetch,
    isError: query.isError,
  };
}
