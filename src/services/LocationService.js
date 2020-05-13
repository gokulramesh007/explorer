import axios from "axios";
import { Strings } from "../constants";

export const fetchAllLocations = async () => {
  try {
    let response = await axios.get(Strings.APPLICATION.API.ALL_LOCATIONS, {});
    return response;
  } catch (error) {
    console.log("Network error : ", error);
  }
};

export const fetchSpecificLocation = async place => {
  try {
    let response = await axios.get(
      Strings.APPLICATION.API.SPECIFIC_LOCATION + place,
      {}
    );
    return response;
  } catch (error) {
    console.log("Network error : ", error);
  }
};

export const fetchSimilarLocations = async place => {
  try {
    let response = await axios.get(
      Strings.APPLICATION.API.SIMILAR_LOCATION + place,
      {}
    );
    return response;
  } catch (error) {
    console.log("Network error : ", error);
  }
};
