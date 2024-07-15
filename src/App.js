import { useState } from "react";
import "./index.css";
import { generatePassword } from "./utils/utils";

function App() {
  const [sliderValue, setSliderValue] = useState(8);
  const [password, setPassword] = useState("");
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const newPassword = generatePassword(sliderValue, includeSpecialChars);
    setPassword(newPassword);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col items-center w-80 p-6 bg-white rounded-2xl border border-gray-300 shadow-lg">
        <form onSubmit={handleSubmit} className="w-full">
          <fieldset className="mb-4">
            <legend className="text-lg font-semibold mb-2">
              Password Length
            </legend>
            <input
              type="range"
              min={8}
              max={20}
              step={1}
              value={sliderValue}
              onChange={(e) => setSliderValue(e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-center mt-2 text-gray-700">{sliderValue}</p>
          </fieldset>
          <div className="flex items-center justify-between mb-4">
            <label className="text-gray-700" htmlFor="include-special-chars">
              Include special characters
            </label>
            <input
              type="checkbox"
              onChange={(e) => setIncludeSpecialChars(e.target.checked)}
              className="form-checkbox h-5 w-5 text-red-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
          >
            Generate
          </button>
        </form>
        <p className="mt-4 text-lg font-mono text-gray-700 break-all">
          {password}
        </p>
      </div>
    </div>
  );
}

export default App;
