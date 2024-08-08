import SearchBox from "./Searchbox";
import Box from "./Box";
import { useState } from "react";
import { selectClasses } from "@mui/material";

export default function Weather() {
  let [weatherinfo, setweatherinfo] = useState({
    city: "Delhi",
    feels_like: 317.21,
    grnd_level: 973,
    humidity: 56,
    pressure: 997,
    sea_level: 997,
    temp: 310.21,
    temp_max: 310.21,
    temp_min: 310,
  });

  let updateWeather = (result)=>{
    setweatherinfo(result);
  }
  return (
    <>
      <div>
       
        <SearchBox updateWeather={updateWeather}/>
        <Box info={weatherinfo} />
      </div>
    </>
  );
}
