function Weather({ weather, loading }) {
  if (loading) {
    return <p className="mt-4 animate-pulse">Loading...</p>;
  }

  if (!weather) {
    return null;
  }

  return (
    <div className="mt-6 bg-white/30 p-4 rounded-2xl backdrop-blur-md shadow-lg">

      <h2 className="text-2xl font-bold">
        {weather.name}
      </h2>

      <p className="capitalize text-sm opacity-80">
        {weather.weather[0].description}
      </p>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt=""
        className="mx-auto"
      />

      <p className="text-4xl font-bold">
        {Math.round(weather.main.temp)}°C
      </p>

      <div className="flex justify-between mt-3 text-sm">
        <p>💧 {weather.main.humidity}%</p>
        <p>🌬 {weather.wind.speed} m/s</p>
      </div>

    </div>
  );
}

export default Weather;