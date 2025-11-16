import React from "react";
import { TbTemperatureCelsius } from "react-icons/tb";
import { BsEye, BsWater, BsThermometer, BsWind } from "react-icons/bs";
import getWeatherIcon from "../utils/weatherIcons";

/**
 * WeatherCard is a pure presentational component
 * @param {Object} data - weather data from useWeather
 * @param {boolean} loading - is loading
 */
export default function WeatherCard({ data }) {
  if (!data) return null;

  const {
    name,
    sys = {},
    main = {},
    weather = [],
    visibility = 0,
    wind = {},
  } = data;

  const primary = weather[0] || {};
  const temp = Math.round(main.temp ?? 0);
  const feelsLike = Math.round(main.feels_like ?? 0);
  const humidity = main.humidity ?? "--";
  const windSpeed = wind.speed ?? "--";
  const description = (primary.description || "").toLowerCase();
  const icon = getWeatherIcon(primary.main);

  const date = new Date();

  return (
    <div className="w-full max-w-[450px] bg-black/20 min-h-[584px] text-white backdrop-blur-[32px] rounded-[32px] py-12 px-6 flex flex-col">
      {/* Top: Icon + City info */}
      <div className="flex items-center gap-x-5">
        <div className="text-[87px]">{icon}</div>
        <div>
          <div className="text-2xl font-semibold">
            {name}, {sys.country}
          </div>
          <div>
            {date.getUTCDate()}/{date.getUTCMonth() + 1}/{date.getUTCFullYear()}
          </div>
        </div>
      </div>

      {/* Middle: Temperature */}
      <div className="my-20 flex flex-col items-center">
        <div className="flex justify-center items-center">
          <div className="text-[144px] leading-none font-light">{temp}</div>
          <div className="text-4xl">
            <TbTemperatureCelsius />
          </div>
        </div>
        <div className="capitalize text-center">{description}</div>
      </div>

      {/* Bottom: Weather stats */}
      <div className="max-w-[378px] mx-auto flex flex-col gap-y-6">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <BsEye className="text-[20px]" />
            <span>
              Visibility{" "}
              <span className="ml-2">{(visibility / 1000).toFixed(1)} km</span>
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            <BsThermometer className="text-[20px]" />
            <span className="flex">
              Feels like{" "}
              <span className="ml-2">
                {feelsLike}
                <TbTemperatureCelsius />
              </span>
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <BsWater className="text-[20px]" />
            <span>
              Humidity <span className="ml-2">{humidity} %</span>
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            <BsWind className="text-[20px]" />
            <span>
              Wind <span className="ml-2">{windSpeed} m/s</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
