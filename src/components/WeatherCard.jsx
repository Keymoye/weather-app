import { TbTemperatureCelsius } from "react-icons/tb";
import { BsEye, BsWater, BsThermometer, BsWind } from "react-icons/bs";
import getWeatherIcon from "../utils/weatherIcons";

export default function WeatherCard({ data, refresh }) {
  if (!data) {
    console.log("[WeatherCard] No data available");
    return null;
  }

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
    <div className="w-full max-w-[450px] bg-black/20 min-h-[584px] text-white backdrop-blur-[32px] rounded-4xl py-12 px-6">
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
      <div className="my-20">
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
            <div className="text-[20px]">
              <BsEye />
            </div>
            <div>
              Visibility{" "}
              <span className="ml-2">{(visibility / 1000).toFixed(1)} km</span>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="text-[20px]">
              <BsThermometer />
            </div>
            <div className="flex">
              Feels like{" "}
              <div className="flex ml-2">
                {feelsLike}
                <TbTemperatureCelsius />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <div className="text-[20px]">
              <BsWater />
            </div>
            <div>
              Humidity <span className="ml-2">{humidity} %</span>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="text-[20px]">
              <BsWind />
            </div>
            <div>
              Wind <span className="ml-2">{windSpeed} m/s</span>
            </div>
          </div>
        </div>
      </div>

      <button
        aria-label="refresh the weather data button"
        onClick={refresh}
        className="mt-4 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Refresh
      </button>
    </div>
  );
}
