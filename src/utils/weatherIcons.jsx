import React from "react";
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
} from "react-icons/io";
import { BsCloudDrizzleFill, BsCloudHaze2Fill } from "react-icons/bs";

export function getWeatherIcon(condition, className = "") {
  switch ((condition || "").toLowerCase()) {
    case "clouds":
      return <IoMdCloudy className={className} />;
    case "clear":
      return <IoMdSunny className={className || "text-[#ffde33]"} />;
    case "rain":
      return <IoMdRainy className={className || "text-[#31cafb]"} />;
    case "snow":
      return <IoMdSnow className={className || "text-[#31cafb]"} />;
    case "thunderstorm":
      return <IoMdThunderstorm className={className} />;
    case "drizzle":
      return <BsCloudDrizzleFill className={className || "text-[#31cafb]"} />;
    case "haze":
    case "mist":
    case "fog":
      return <BsCloudHaze2Fill className={className} />;
    default:
      return <IoMdCloudy className={className} />;
  }
}

export default getWeatherIcon;
