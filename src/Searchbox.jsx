import { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
export default function SearchBox({ updateWeather }) {
  let [City, setCity] = useState("");
  let limit = 900;
  const API_URL = "http://api.openweathermap.org/geo/1.0/direct";
  const API_KEY = "9058697675c1464a8cf31be1b79aced8";
  let getWeather = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${City}&limit=${limit}&appid=${API_KEY}`
      );
      let jsonResponse = await response.json();

      let { lat, lon } = jsonResponse[0];
      // console.log(lat, lon);

      let weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=matric`
      );
      let weatherJsonResponse = await weatherResponse.json();
      console.log(weatherJsonResponse);

      let result = {
        temp: weatherJsonResponse.main.temp,
        city: weatherJsonResponse.name,
        feels_like: weatherJsonResponse.main.feels_like,
        humidity: weatherJsonResponse.main.humidity,
        pressure: weatherJsonResponse.main.pressure,
        sea_level: weatherJsonResponse.main.sea_level,
        grnd_level: weatherJsonResponse.main.grnd_level,
        temp_min: weatherJsonResponse.main.temp_min,
        temp_max: weatherJsonResponse.main.temp_max,
      };

      updateWeather(result);
    } catch (err) {
      alert("City Not Found");
    }
  };

  function updateCity(eve) {
    setCity(eve.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(City);
    getWeather();
    setCity("");
  }
  return (
    <div>
      <h1>Weather Forcast</h1>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City "
          variant="outlined"
          required
          value={City}
          onChange={updateCity}
        />
        <br />
        <br />
        <Button
          size="large"
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
        >
          find
        </Button>
      </form>
    </div>
  );
}
