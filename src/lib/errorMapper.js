// lib/errorMapper.ts
import {
  CityNotFoundError,
  NetworkError,
  WeatherError,
} from "../services/error.js";

export function mapWeatherErrorToMessage(error) {
  if (error instanceof CityNotFoundError) return "City not found";
  if (error instanceof NetworkError) return "You are offline";
  if (error instanceof WeatherError) return "Unable to fetch weather data";
  return "Something went wrong";
}
