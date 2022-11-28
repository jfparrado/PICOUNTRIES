//aca no puede haber nada asincrono
import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_BY_ID,
  GET_COUNTRIES_BY_NAME,
  POST_ACTIVITIES,
  GET_ALL_ACTIVITIES,
  UPDATE_FILTER,
  UPDATE_ORDER,
} from "../actions";
const initialState = {
  allCountries: [], //esto es para que al filtrar no se hagan filtros sobre los filtros. siempre sobre todas las recetas
  countries: [],
  countryDetail: [],
  activities: [],
  filters: "All",
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

    case POST_ACTIVITIES:
      return {
        ...state,
      };

    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    case UPDATE_FILTER:
      return {
        ...state,
        filters: action.payload,
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
