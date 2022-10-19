import axios from "axios";
export const GET_ALL_RECIPES = "GET_ALL_RECIPIES";
export const GET_RECIPIES_BY_ID = "GET_RECIPIES_BY_ID";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const GET_ALL_DIETS = "GET_ALL_DIETS";
export const GET_DIETS_BY_NAME = "GET_DIETS_BY_NAME";
export const CREATE_DIET = "CREATE_DIET";

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
      return dispatch({ type: GET_RECIPIES_BY_ID, payload: oneRecipe.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}
// export function createRecipe(recipe) {
//   return { type: CREATE_RECIPE, payload: { ...recipe, id: id++ } };
// }
// export function getAllDiets() {
//   return async function (dispatch) {
//     try {
//       return await axios
//         .get(`http://localhost:3001/diets`) //esta es la conexion entre el front y el back
//         .then((response) =>
//           dispatch({ type: GET_ALL_DIETS, payload: response.data })
//         );
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// }
// export function getDietsByName(name) {
//   return async function (dispatch) {
//     try {
//       return await axios
//         .get(`http://localhost:3001/diets/${name}`) //esta es la conexion entre el front y el back
//         .then((response) =>
//           dispatch({ type: GET_DIETS_BY_NAME, payload: response.data })
//         );
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// }
// export function createDiet(diet) {
//   return { type: CREATE_PRODUCT, payload: { ...diet, id: id++ } };
// }
