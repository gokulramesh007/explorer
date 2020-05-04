const String = {
  APPLICATION: {
    TITLE: "EXPLORE..R",
    ROUTES: {
      HOME: "/",
      DETAILS_SCREEN: "/details"
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
      EXPLORE_TEXT: "Explore, The World is Not Enough"
    },
    API: {
      ALL_LOCATIONS: "https://nijinserver.herokuapp.com/dummy/places",
      SPECIFIC_LOCATION: "https://nijinserver.herokuapp.com/dummy/places/",
      SIMILAR_LOCATION: "http://nijinserver.herokuapp.com/dummy/places/related/"
    }
  }
};

export default String;
