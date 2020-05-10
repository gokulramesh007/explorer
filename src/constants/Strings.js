const String = {
  APPLICATION: {
    TITLE: "EXPLORE..R",
    ROUTES: {
      HOME: "/",
      DETAILS_SCREEN: "/details/:place"
    },
    HEADER: {
      THEMES: {
        LIGHT: "light",
        DARK: "dark"
      }
    },
    HOME_SCREEN: {
      BANNER: {
        THEMES: {
          LIGHT: "light",
          DARK: "dark"
        }
      },
      EXPLORE_TEXT: "Explore, The World is Not Enough",
      LIKE_TO_TRAVEL_TEXT: "Like to Travel? Contact Us",
      THEMES: {
        LIGHT: "light",
        DARK: "dark"
      },
      BUTTON: {
        LOCATION_LIST: {
          READ_MORE: "Read More"
        },
        CONTACT_US_FORM: {
          SUBMIT_INTEREST: "Submit Interest"
        }
      },
      FORM: {
        CONTACT_US: {
          NAME: "Name",
          HOME_TOWN: "Your Home Town",
          WHERE_LABEL: "Where would you like to go?"
        }
      }
    },
    DETAILS_SCREEN: {
      DEFAULT_LOCATION: "Pollachi",
      SIMILAR_LOCATIONS: "Similar Other Locations",
      NO_DESCRIPTION: "No description for this location!"
    },
    API: {
      ALL_LOCATIONS: "https://nijinserver.herokuapp.com/dummy/places",
      SPECIFIC_LOCATION: "https://nijinserver.herokuapp.com/dummy/places/",
      SIMILAR_LOCATION:
        "http://nijinserver.herokuapp.com/dummy/places/related/",
      WEATHER: "http://api.openweathermap.org/data/2.5/weather"
    },
    API_KEYS: {
      WEATHER: "c361641fb024040cced41fbb6f3320f9"
    },
    BUTTON_DEFAULT_TEXT: "Submit",
    KELVIN_TO_CELSIUS_DEFAULT: 273.15,
    DETAILS_PAGE_ROUTE: "/details/"
  }
};

export default String;
