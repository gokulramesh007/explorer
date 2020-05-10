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

export const FetchSpecificLocation = async place => {
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

export const FetchSimilarLocations = async place => {
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
