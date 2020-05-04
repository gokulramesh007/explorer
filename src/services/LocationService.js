import axios from "axios";
import { Strings } from "../constants";

export const FetchAllLocations = async () => {
  try {
    let response = await axios.get(Strings.APPLICATION.API.ALL_LOCATIONS, {});
    return response;
  } catch (error) {
    console.log("Network error : ", error);
  }
};
