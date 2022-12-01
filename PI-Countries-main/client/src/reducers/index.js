//aca no puede haber nada asincrono
import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_BY_ID,
  GET_COUNTRIES_BY_NAME,
  GET_COUNTRIES_BY_ACTIVITY,
  GET_COUNTRIES_BY_CONTINENT,
  COUNTRIES_ORDER_BY_NAME,
  POST_ACTIVITIES,
  GET_ALL_ACTIVITIES,
  UPDATE_FILTER_ACTIVITY,
  UPDATE_FILTER_CONTINENT,
  UPDATE_ORDER,
} from "../actions";
const initialState = {
  allCountries: [], //esto es para que al filtrar no se hagan filtros sobre los filtros. siempre sobre todos los paises
  countries: [],
  countryDetail: [],
  activities: [],
  filterActivity: "All",
  filterContinent: "All",
  orders: "All",
};
const empty = [
  {
    name: "No country found",
    flags:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Missing_flag.png",
    region: "No country found",
    capital: "No capital found",
    subregion: "No subregion found",
    area: "No area found",
    population: "No population found",
  },
];

export default function rootReducer(state = initialState, action) {
  function orderArrays(action) {
    switch (action.payload) {
      case "asc":
        state.countries.sort((countryA, countryB) => {
          const nameA = countryA.name.toUpperCase(); // ignore upper and lowercase
          const nameB = countryB.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
          // names must be equal
        });

        break;

      case "desc":
        state.countries.sort((countryA, countryB) => {
          const nameA = countryA.name.toUpperCase(); // ignore upper and lowercase
          const nameB = countryB.name.toUpperCase(); // ignore upper and lowercase
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
          // names must be equal
        });
        break;

      case "popu":
        state.countries.sort((countryA, countryB) => {
          const populationA = countryA.population;
          const populationB = countryB.population;
          if (populationA > populationB) {
            return -1;
          }
          if (populationA < populationB) {
            return 1;
          }
          return 0;
          // names must be equal
        });
        break;
      default:
        break;
    }
  }
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state, //retorno una copia del estado
        countries: action.payload, // modificar la propiedad countries metiendole todos las countries del payload
        allCountries: action.payload,
      };

    case GET_COUNTRIES_BY_ID:
      return {
        ...state,
        countryDetail: action.payload,
      };

    case GET_COUNTRIES_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_COUNTRIES_BY_ACTIVITY:
      const allCountries = state.allCountries;
      const filteredCountries = state.countries;

      // if (filterActivity === "All" && filterContinent === "All") {
      //   countriesByContinent = allCountries2;
      // } else if (filterActivity === "All" && filterContinent !== "All") {
      //   countriesByContinent = allCountries2.filter(
      //     (country) => country.region === action.payload
      //   );
      // } else if (filterActivity !== "All" && filterContinent === "All") {
      //   countriesByContinent = allCountries2.filter((country) =>
      //     country.activities.find(({ name }) => name === filterActivity)
      //   );
      // } else if (filterActivity !== "All" && filterContinent !== "All") {
      //   countriesByContinent = allCountries2.filter((country) =>
      //     country.activities.find(({ name }) => name === filterActivity)
      //   );
      //   countriesByContinent = countriesByContinent.filter(
      //     (country) => country.region === action.payload
      //   );
      // }

      let countriesByActivity =
        action.payload === "All" //si se ecogen todas
          ? allCountries //traetelas todas
          : filteredCountries.filter(
              (
                country //sino solo lo que se escoja
              ) =>
                country.activities.find(({ name }) => name === action.payload)
            );

      if (countriesByActivity.length === 0) countriesByActivity = empty;
      return {
        ...state,
        countries: countriesByActivity,
      };

    case GET_COUNTRIES_BY_CONTINENT:
      const allCountries2 = state.allCountries;
      const filterActivity = state.filterActivity;
      const filterContinent = state.filterContinent;
      const orders = state.orders;
      const newAction = { payload: orders };
      console.log("new action:", newAction);
      let countriesByContinent = [];
      if (filterActivity === "All" && filterContinent === "All") {
        countriesByContinent = allCountries2;
      } else if (filterActivity === "All" && filterContinent !== "All") {
        countriesByContinent = allCountries2.filter(
          (country) => country.region === action.payload
        );
      } else if (filterActivity !== "All" && filterContinent === "All") {
        countriesByContinent = allCountries2.filter((country) =>
          country.activities.find(({ name }) => name === filterActivity)
        );
      } else if (filterActivity !== "All" && filterContinent !== "All") {
        countriesByContinent = allCountries2.filter((country) =>
          country.activities.find(({ name }) => name === filterActivity)
        );
        countriesByContinent = countriesByContinent.filter(
          (country) => country.region === action.payload
        );
      }
      if (orders !== "All") {
        orderArrays(newAction);
      }
      if (countriesByContinent.length === 0) countriesByContinent = empty;
      console.log("countires by continent:", countriesByContinent);

      return {
        ...state,
        countries: countriesByContinent,
      };

    case COUNTRIES_ORDER_BY_NAME:
      orderArrays(action);

      return {
        ...state,
        orders: action.payload,
      };

    case POST_ACTIVITIES:
      return {
        ...state,
      };

    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    case UPDATE_FILTER_ACTIVITY:
      return {
        ...state,
        filterActivity: action.payload,
      };

    case UPDATE_FILTER_CONTINENT:
      return {
        ...state,
        filterContinent: action.payload,
      };

    case UPDATE_ORDER:
      return {
        ...state,
        orders: action.payload,
      };

    default:
      return { ...state };
  }
}
