import { ImSpinner8 } from "react-icons/im";

export default function LoadingSpinner() {
  console.log("loading...");
  return (
    <div
      className="w-full h-full flex
        justify-center items-center"
    >
      <ImSpinner8
        className="text-5xl animate-spin
           text-white"
      />
    </div>
  );
}
