//action es un objeto con 2 propiedades. type y payload
import axios from "axios";
export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_RECIPES_BY_ID = "GET_RECIPES_BY_ID";
export const GET_RECIPES_BY_DIET = "GET_RECIPES_BY_DIET";
export const GET_RECIPES_BY_NAME = "GET_RECIPES_BY_NAME";
export const POST_RECIPE = "POST_RECIPE";
export const GET_ALL_DIETS = "GET_ALL_DIETS";
export const GET_DIETS_BY_NAME = "GET_DIETS_BY_NAME";
export const POST_DIET = "POST_DIET";
export const RECIPES_ORDER_BY_NAME = "RECIPES_ORDER_BY_NAME";
export const UPDATE_FILTER = "UPDATE_FILTER";
export const UPDATE_ORDER = "UPDATE_ORDER";
export const GET_ALL_FILTERS = "GET_ALL_FILTERS";

export function getAllRecipes() {
  return async function (dispatch) {
    try {
      const allRecipes = await axios.get("http://localhost:3001/recipes");
      return dispatch({
        type: GET_ALL_RECIPES,
        payload: allRecipes.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getRecipesById(id) {
  return async function (dispatch) {
    try {
      const oneRecipe = await axios.get(`http://localhost:3001/recipes/${id}`);
      return dispatch({
        type: GET_RECIPES_BY_ID,
        payload: oneRecipe.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function getRecipesByDiet(dietName) {
  return {
    type: GET_RECIPES_BY_DIET,
    payload: dietName,
  };
}
export function getRecipesByName(recipeName) {
  return async function (dispatch) {
    try {
      const recipesSameName = await axios.get(
        `http://localhost:3001/recipes?name=${recipeName}`
      );
      return dispatch({
        type: GET_RECIPES_BY_NAME,
        payload: recipesSameName.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getRecipesOrderedByName(payload) {
  return {
    type: RECIPES_ORDER_BY_NAME,
    payload,
  };
}
export function postRecipe(recipe) {
  return async function (dispatch) {
    try {
      const recipeCreated = await axios.post(
        `http://localhost:3001/recipes`,
        recipe
      );
      return recipeCreated;
    } catch (error) {
      console.log(error);
    }
  };
}

export function postUser(user) {
  return async function (dispatch) {
    try {
      const userCreated = await axios.post(`http://localhost:3001/users`, user);
      return userCreated;
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllDiets() {
  return async function (dispatch) {
    try {
      const diets = await axios.get(`http://localhost:3001/diets`);
      return dispatch({ type: GET_ALL_DIETS, payload: diets.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function getDietsByName(name) {
  return async function (dispatch) {
    try {
      const diets = await axios.get(`http://localhost:3001/diets/${name}`); //esta es la conexion entre el front y el back
      return dispatch({ type: GET_DIETS_BY_NAME, payload: diets.data });
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
