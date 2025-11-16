import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { ImSpinner8 } from "react-icons/im";
import WeatherCard from "./weatherCard";
import useWeather from "../hooks/useWeather";

export default function App() {
  const [input, setInput] = useState("");
  const [animate, setAnimate] = useState(false);

  const { city, setCity, data, loading, error } = useWeather("Nairobi");

  function handleSubmit(e) {
    e.preventDefault();

    const cleaned = input.trim();
    if (!cleaned) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500);
      return;
    }

    setCity(cleaned);
    setInput("");
  }

  return (
    <div className="w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 lg:px-0">
      {/* error banner */}
      {error && (
        <div className="w-full max-w-[90vw] lg:max-w-[450px] bg-[#ff208c] text-white absolute top-2 lg:top-10 p-4 capitalize rounded-md">
          {error}
        </div>
      )}

      {/* search form */}
      <form
        onSubmit={handleSubmit}
        className={`${
          animate ? "animate-shake" : ""
        } h-16 bg-black/30 w-full max-w-[450px] rounded-full backdrop-blur-[32px] mb-8 flex items-center px-2`}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none placeholder:text-white text-white text-[15px] font-light pl-6 h-full"
          type="text"
          placeholder="Search by city or country"
        />

        <button
          type="submit"
          className="bg-[#1ab8ed] hover:bg-[#15abdd] w-20 h-12 rounded-full flex justify-center items-center transition"
        >
          <IoMdSearch className="text-2xl text-white" />
        </button>
      </form>

      {/* card display */}
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <ImSpinner8 className="text-5xl animate-spin text-white" />
        </div>
      ) : (
        data && <WeatherCard data={data} />
      )}
    </div>
  );
}
