import React, { useState } from "react";
import axios from "axios";

const REGISTER_URL = 'https://parcial2arsw-eudhbgfxhqh8ccab.canadacentral-01.azurewebsites.net/status';

export default function WeatherData() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${REGISTER_URL}/${city}`);
      setWeather(response.data);
      setError("");
    } catch (err) {
      setError("No se pudo obtener el clima. Verifica la ciudad.");
      setWeather(null);
    }
  };

  return (
    <div>
      <h2>Consulta el clima</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa una ciudad"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Consultar</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && (
        <div>
          <h3>Datos del clima para {city}</h3>
          <pre>{JSON.stringify(weather, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
