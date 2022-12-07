//aca no puede haber nada asincrono
import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_BY_ID,
  DELETE_COUNTRY_BY_ID,
  GET_COUNTRIES_BY_NAME,
  GET_COUNTRIES_BY_ACTIVITY,
  GET_COUNTRIES_BY_CONTINENT,
  COUNTRIES_ORDER_BY_NAME,
  POST_ACTIVITIES,
  GET_ALL_ACTIVITIES,
  UPDATE_FILTER_ACTIVITY,
  UPDATE_FILTER_CONTINENT,
  UPDATE_ORDER,
  GET_ALL_COUNTRIES_AND_ACTIVITIES,
  PUT_ACTIVITY,
} from "../actions";
const initialState = {
  allCountries: [], //esto es para que al filtrar no se hagan filtros sobre los filtros. siempre sobre todos los paises
  countries: [],
  countriesAndActivities: [],
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
  const allCountries = state.allCountries;
  const filterActivity = state.filterActivity;
  const filterContinent = state.filterContinent;
  const orders = state.orders;
  const newAction = { payload: orders };
  let countriesByFilter = [];
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
  function filtrar() {
    if (filterActivity === "All" && filterContinent === "All") {
      countriesByFilter = allCountries;
    } else if (filterActivity === "All" && filterContinent !== "All") {
      countriesByFilter = allCountries.filter(
        (country) => country.region === filterContinent
      );
    } else if (filterActivity !== "All" && filterContinent === "All") {
      countriesByFilter = allCountries.filter((country) =>
        country.activities.find(({ name }) => name === filterActivity)
      );
    } else if (filterActivity !== "All" && filterContinent !== "All") {
      countriesByFilter = allCountries.filter((country) =>
        country.activities.find(({ name }) => name === filterActivity)
      );
      countriesByFilter = countriesByFilter.filter(
        (country) => country.region === filterContinent
      );
    }
    if (orders !== "All") {
      orderArrays(newAction);
    }
    if (countriesByFilter.length === 0) countriesByFilter = empty;
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

    case DELETE_COUNTRY_BY_ID:
      return {
        ...state,
        allCountries: action.payload,
      };

    case GET_COUNTRIES_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_COUNTRIES_BY_ACTIVITY:
      filtrar();

      return {
        ...state,
        countries: countriesByFilter,
      };

    case GET_COUNTRIES_BY_CONTINENT:
      filtrar();
      return {
        ...state,
        countries: countriesByFilter,
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

    case PUT_ACTIVITY:
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

    case GET_ALL_COUNTRIES_AND_ACTIVITIES:
      return {
        ...state,
        countriesAndActivities: action.payload,
      };
    default:
      return { ...state };
  }
}
