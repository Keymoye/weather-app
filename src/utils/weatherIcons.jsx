import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
} from "react-icons/io";
import { BsCloudHaze2Fill, BsCloudDrizzleFill } from "react-icons/bs";

/**
 * Maps OpenWeather (or similar) weather conditions
 * to React Icons components.
 *
 * Can be easily extended for new conditions.
 */
const ICON_MAP = {
  Clouds: <IoMdCloudy className="text-[#ffffff]" />,
  Clear: <IoMdSunny className="text-[#ffde33]" />,
  Rain: <IoMdRainy className="text-[#31cafb]" />,
  Snow: <IoMdSnow className="text-[#31cafb]" />,
  Thunderstorm: <IoMdThunderstorm className="text-[#ffffff]" />,
  Drizzle: <BsCloudDrizzleFill className="text-[#31cafb]" />,
  Haze: <BsCloudHaze2Fill className="text-[#ffffff]" />,
};

/**
 * Returns the correct icon component for a weather condition.
 * @param {string} condition - weather condition, e.g., 'Clouds', 'Rain'
 * @returns {JSX.Element} React icon
 */
export default function getWeatherIcon(condition) {
  return ICON_MAP[condition] || <IoMdSunny className="text-[#ffffff]" />;
}
