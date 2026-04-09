import { useState } from "react";
import axios from "axios";
import Weather from "./weather";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "0ac47f042b9cb5fc95bafb71c4d21636";

  const getWeather = async () => {
    if (!city) return;

    setLoading(true);

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
    } catch (err) {
      alert("Kota gak ketemu");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400">
      
      <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-6 rounded-3xl shadow-2xl w-80 text-center text-white">

        <h1 className="text-3xl font-bold mb-5 tracking-wide">
          🌤 Weather App
        </h1>

        <input
          type="text"
          placeholder="Masukkan kota..."
          className="w-full p-3 rounded-xl mb-3 text-black outline-none focus:ring-2 focus:ring-white"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && getWeather()}
        />

        <button
          onClick={getWeather}
          className="w-full bg-white text-blue-600 font-semibold py-2 rounded-xl hover:bg-gray-200 transition"
        >
          Cari
        </button>

        <Weather weather={weather} loading={loading} />

      </div>
    </div>
  );
}

export default App;