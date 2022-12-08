//action es un objeto con 2 propiedades. type y payload
import axios from "axios";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRIES_BY_ID = "GET_COUNTRIES_BY_ID";
export const DELETE_COUNTRY_BY_ID = "DELETE_COUNTRY_BY_ID";
export const GET_COUNTRIES_BY_ACTIVITY = "GET_COUNTRIES_BY_ACTIVITY";
export const GET_COUNTRIES_BY_CONTINENT = "GET_COUNTRIES_BY_CONTINENT";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const GET_ACTIVITIES_BY_NAME = "GET_ACTIVITIES_BY_NAME";
export const POST_ACTIVITIES = "POST_ACTIVITIES";
export const COUNTRIES_ORDER_BY_NAME = "COUNTRIES_ORDER_BY_NAME";
export const UPDATE_FILTER_ACTIVITY = "UPDATE_FILTER_ACTIVITY";
export const UPDATE_FILTER_CONTINENT = "UPDATE_FILTER_CONTINENT";
export const UPDATE_ORDER = "UPDATE_ORDER";
export const GET_ALL_FILTERS = "GET_ALL_FILTERS";
export const RESET_FILTERS = "RESET_FILTERS";
export const GET_ALL_COUNTRIES_AND_ACTIVITIES =
  "GET_ALL_COUNTRIES_AND_ACTIVITIES";
export const PUT_ACTIVITY = "PUT_ACTIVITY";

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
export function resetFilters() {
  return async function (dispatch) {
    return dispatch({
      type: RESET_FILTERS,
      payload: "All",
    });
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
export function deleteCountryById(id) {
  return async function (dispatch) {
    try {
      const updatedCountries = await axios.delete(
        `http://localhost:3001/countries/${id}`
      );
      return dispatch({
        type: DELETE_COUNTRY_BY_ID,
        payload: updatedCountries,
      });
    } catch (error) {
      console.log(
        "El error client actions deleteCountryById es:",
        error.message
      );
      throw new Error(
        "El error client actions deleteCountryById es:",
        error.message
      );
    }
  };
}
export function getCountriesByName(countryName) {
  const empty = [
    {
      cca3: "404",
      name: "No country found",
      flags:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Missing_flag.png",
      region: "No region found",
      capital: ["No capital found"],
      subregion: "No subregion found",
      area: "No area found",
      population: "No population found",
      activities: [
        {
          name: "No activity",
        },
      ],
    },
  ];
  return async function (dispatch) {
    try {
      const countriesSameName = await axios.get(
        `http://localhost:3001/countries?name=${countryName}`
      );
      if (countriesSameName.status !== 204) {
        return dispatch({
          type: GET_COUNTRIES_BY_NAME,
          payload: countriesSameName.data,
        });
      } else {
        return dispatch({
          type: GET_COUNTRIES_BY_NAME,
          payload: empty,
        });
      }
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
export function getCountriesByActivity(activityName) {
  return {
    type: GET_COUNTRIES_BY_ACTIVITY,
    payload: activityName,
  };
}
export function getCountriesByContinent(continentName) {
  return {
    type: GET_COUNTRIES_BY_CONTINENT,
    payload: continentName,
  };
}
export function getCountriesOrderedByName(payload) {
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
export function putActivities(activity) {
  const { name } = activity;
  return async function (dispatch) {
    try {
      const updatedActivity = await axios.put(
        `http://localhost:3001/activities/${name}`,
        activity
      );
      return updatedActivity;
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

export function updateFilterActivity(filter) {
  return async function (dispatch) {
    return dispatch({ type: UPDATE_FILTER_ACTIVITY, payload: filter });
  };
}

export function updateFilterContinent(filter) {
  return async function (dispatch) {
    return dispatch({ type: UPDATE_FILTER_CONTINENT, payload: filter });
  };
}
export function updateOrder(order) {
  return async function (dispatch) {
    return dispatch({ type: UPDATE_ORDER, payload: order });
  };
}
export function getAllCountriesAndActivities() {
  return async function (dispatch) {
    try {
      const allCountriesAndActivities = await axios.get(
        "http://localhost:3001/countriesactivities"
      );
      return dispatch({
        type: GET_ALL_COUNTRIES_AND_ACTIVITIES,
        payload: allCountriesAndActivities.data,
      });
    } catch (error) {
      console.log(
        "El error client actions getAllCountriesAndActivities es:",
        error.message
      );
      throw new Error(
        "El error client actions getAllCountriesAndActivities es:",
        error.message
      );
    }
  };
}
