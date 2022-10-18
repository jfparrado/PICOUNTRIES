//aca no puede haber nada asincrono
import {
  GET_ALL_RECIPIES,
  // GET_RECIPIES_BY_NAME,
  // GET_DIETS_BY_NAME,
  // CREATE_DIET,
  // CREATE_RECIPE,
  // GET_ALL_DIETS,
} from "../actions";
const initialState = {
  recipes: [],
  diets: [],
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_RECIPIES:
      return {
        ...state, //retorno una copia del estado
        recipes: action.payload, // modificar la propiedad recipes metiendole todos las recipes del payload
      };
    // case GET_RECIPIES_BY_NAME:
    //   return {
    //     ...state,
    //     characters: recipes.payload,
    //   };
    // case GET_DIETS_BY_NAME:
    //   return {
    //     ...state,
    //     characters: recipes.payload,
    //   };
    // case CREATE_DIET:
    //   return {
    //     ...state,
    //     characters: recipes.payload,
    //   };
    // case CREATE_RECIPE:
    //   return {
    //     ...state,
    //     characters: recipes.payload,
    //   };
    // case GET_ALL_DIETS:
    //   return {
    //     ...state,
    //     characters: recipes.payload,
    //   };
    default:
      return { ...state };
  }
}
