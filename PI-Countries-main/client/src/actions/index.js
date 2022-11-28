//action es un objeto con 2 propiedades. type y payload
import axios from "axios";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRIES_BY_ID = "GET_COUNTRIES_BY_ID";
export const GET_COUNTRIES_BY_ACTIVITY = "GET_COUNTRIES_BY_ACTIVITY";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";

export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const GET_ACTIVITIES_BY_NAME = "GET_ACTIVITIES_BY_NAME";
export const POST_ACTIVITIES = "POST_ACTIVITIES";
export const COUNTRIES_ORDER_BY_NAME = "COUNTRIES_ORDER_BY_NAME";
export const UPDATE_FILTER = "UPDATE_FILTER";
export const UPDATE_ORDER = "UPDATE_ORDER";
export const GET_ALL_FILTERS = "GET_ALL_FILTERS";

export function getAllCountries() {
  return async function (dispatch) {
    try {
      const allCountries = await axios.get("http://localhost:3001/countries");
      return dispatch({
        type: GET_ALL_COUNTRIES,
        payload: allCountries.data,
      });
    } catch (error) {
      console.log("El error client actions getAllCountries es:", error.message);
      throw new Error(
        "El error client actions getAllCountries es:",
        error.message
      );
    }
  };
}
export function getCountriesById(id) {
  return async function (dispatch) {
    try {
      const oneCountry = await axios.get(
        `http://localhost:3001/countries/${id}`
      );
      return dispatch({
        type: GET_COUNTRIES_BY_ID,
        payload: oneCountry.data,
      });
    } catch (error) {
      console.log(
        "El error client actions getCountriesById es:",
        error.message
      );
      throw new Error(
        "El error client actions getCountriesById es:",
        error.message
      );
    }
  };
}
export function getCountriesByName(countryName) {
  return async function (dispatch) {
    try {
      const countriesSameName = await axios.get(
        `http://localhost:3001/countries?name=${countryName}`
      );
      return dispatch({
        type: GET_COUNTRIES_BY_NAME,
        payload: countriesSameName.data,
      });
    } catch (error) {
      console.log(
        "El error client actions getCountriesByName es:",
        error.message
      );
      throw new Error(
        "El error client actions getCountriesByName es:",
        error.message
      );
    }
  };
}
export function getCountriesByActivity(dietName) {
  return {
    type: GET_COUNTRIES_BY_ACTIVITY,
    payload: dietName,
  };
}
export function getCountriesOrderedByActivity(payload) {
  return {
    type: COUNTRIES_ORDER_BY_NAME,
    payload,
  };
}
export function postActivities(activity) {
  return async function (dispatch) {
    try {
      const activityCreated = await axios.post(
        `http://localhost:3001/activities`,
        activity
      );
      return activityCreated;
    } catch (error) {
      console.log("El error client actions postActivities es:", error.message);
      throw new Error(
        "El error client actions postActivities es:",
        error.message
      );
    }
  };
}
export function getAllActivities() {
  return async function (dispatch) {
    try {
      const allActivities = await axios.get("http://localhost:3001/activities");
      return dispatch({
        type: GET_ALL_ACTIVITIES,
        payload: allActivities.data,
      });
    } catch (error) {
      console.log(
        "El error client actions getAllActivities es:",
        error.message
      );
      throw new Error(
        "El error client actions getAllActivities es:",
        error.message
      );
    }
  };
}
export function getActivitiesByName(name) {
  return async function (dispatch) {
    try {
      const diets = await axios.get(`http://localhost:3001/diets/${name}`); //esta es la conexion entre el front y el back
      return dispatch({ type: GET_ACTIVITIES_BY_NAME, payload: diets.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}
// export function getAllFilter() {
//   return async function (dispatch) {
//     try {
//       return dispatch({ type: GET_ALL_FILTERS, payload:  });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// }
export function updateFilter(filter) {
  return async function (dispatch) {
    return dispatch({ type: UPDATE_FILTER, payload: filter });
  };
}
export function updateOrder(order) {
  return async function (dispatch) {
    return dispatch({ type: UPDATE_ORDER, payload: order });
  };
}
