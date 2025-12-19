import WeatherCard from "./components/WeatherCard";
import useWeather from "./hooks/useWeather";
import WeatherSearchBar from "./components/WeatherSearchBar";
import LoadingSpinner from "./components/LoadingSpinner";
import { mapWeatherErrorToMessage } from "./lib/errorMapper";

export default function App() {
  const { data, error, isLoading, isFetching, isError, setCity, refetch } =
    useWeather("Nairobi");

  return (
    <div className="w-full min-h-screen font-primary bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 py-4 lg:px-0">
      {/* Error banner */}
      {isError && (
        <div className="w-full mb-4 max-w-[450px] bg-[#ff208c] text-white p-4 rounded-md">
          {mapWeatherErrorToMessage(error)}
        </div>
      )}

      <WeatherSearchBar setCity={setCity} />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <WeatherCard data={data} refresh={refetch} />
      )}

      {isFetching && !isLoading && (
        <div className="text-white text-sm mt-2 opacity-70">
          Updating weather…
        </div>
      )}
    </div>
  );
}
