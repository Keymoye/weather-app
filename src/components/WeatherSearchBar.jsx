import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

export default function WeatherSearchBar({ setCity }) {
  const [input, setInput] = useState("");
  const [animate, setAnimate] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    //prevent default form submission
    e.preventDefault();

    console.log("[WeatherSearchBar] Submitting search for:", input);
    if (!input.trim()) {
      console.warn(
        "[WeatherSearchBar] Empty input, triggering shake animation"
      );
      //if input is empty add animation class
      setAnimate(true);
      //remove animation class after 500ms
      setTimeout(() => {
        setAnimate(false);
      }, 500);
      return;
    }
    setCity(input.trim());
    //clear the input value after submit
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        animate ? "animate-shake" : "animate-none"
      } h-16 bg-black/30 w-full max-w-[450px]
        rounded-full backdrop-blur-[32px] mb-8`}
    >
      <div
        className="h-full relative flex item items-center
         justify-between px-2"
      >
        <input
          value={input}
          onChange={(e) => handleInput(e)}
          className="flex-1 bg-transparent outline-none
            placeholder:text-white text-white text-[15px]
            font-light pl-6 h-full"
          type="text"
          placeholder="Search by city or country"
        />
        <button
          type="submit"
          aria-label="search city button for submission"
          className="bg-[#1ab8ed] hover:bg-
           [#15abdd] w-20 h-12 rounded-full flex
            justify-center items-center transition"
        >
          <IoMdSearch className="text-2xl text-white" />
        </button>
      </div>
    </form>
  );
}
