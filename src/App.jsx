import WeatherCard from "./components/WeatherCard";
import useWeather from "./hooks/useWeather";
import WeatherSearchBar from "./components/WeatherSearchBar";
import LoadingSpinner from "./components/LoadingSpinner";

export default function App() {
  const { data, loading, refresh, error, setCity } = useWeather("Nairobi");

  console.log("[App] Current query:");
  return (
    <div className="w-full min-h-screen font-primary bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 py-4 lg:px-0">
      {/* error banner */}
      {error && (
        <div className="w-full max-w-[90vw] lg:max-w-[450px] bg-[#ff208c] text-white absolute top-2 lg:top-10 p-4 capitalize rounded-md">
          {error}
        </div>
      )}

      {/* search bar */}
      <WeatherSearchBar setCity={setCity} />

      {/* card display */}

      {loading ? (
        <LoadingSpinner />
      ) : (
        <WeatherCard data={data} refresh={refresh} />
      )}
    </div>
  );
}
