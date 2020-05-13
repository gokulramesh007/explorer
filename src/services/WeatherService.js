import axios from "axios";
import { Strings } from "../constants";

export const fetchWeather = async place => {
  try {
    let response = await axios.get(Strings.APPLICATION.API.WEATHER, {
      params: {
        q: place,
        appid: Strings.APPLICATION.API_KEYS.WEATHER
      }
    });
    return response;
  } catch (error) {
    console.log("Network error : ", error);
    return error.message;
  }
};
