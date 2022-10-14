const axios = require("axios");
const { Recipe, Diet } = require("../../db");
const { API_KEY } = process.env;

const getInfoApi = async () => {
  let i = 0;
  try {
    const infoApi = await axios.get(
      // `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true` // esto es lo que se debe usar
      "https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5"
    );
    const data = infoApi.data.results;
    const recipeDiets = data?.map((recipe) => {
      return recipe.diets;
    });
    // console.log(recipeDiets);
    let allDiets = [];
    recipeDiets?.forEach((recipe) => {
      recipe?.forEach((diet) => {
        if (allDiets.indexOf(diet) === -1) {
          allDiets.push(diet);
        }
      });
    });
    // console.log("estamos aca:", allDiets);
    return allDiets; //este es un array con todas las recetas
  } catch (error) {
    throw new Error("El error es:", error);
  }
};
const getInfoDB = async () => {
  //check
  try {
    const dbInfo = await Diet.findAll();
    const resultDiets = dbInfo.map((diet) => diet.dataValues);
    console.log("las resultDiets es:", resultDiets);
    return resultDiets;
  } catch (error) {
    throw new Error("El error es:", error.message);
  }
};
const getAllDiets = async () => {
  try {
    //aca la idea es traerse ambos como array. luego hacer un merge asegurando que no se repita ninguno y nimalmente pasarlo a objeto con ids unicos a cada diet
    const infoApi = await getInfoApi();
    const infoDB = await getInfoDB();

    console.log("el api es:", infoApi);
    console.log("el db es:", infoDB);

    if (infoApi.length === 0 && infoDB.length === 0) {
      const initialDiets = [
        "Gluten Free",
        "Ketogenic",
        "Vegetarian",
        "Lacto-Vegetarian",
        "Ovo-Vegetarian",
        "Vegan",
        "Pescetarian",
        "Paleo",
        "Primal",
        "Low FODMAP",
        "Whole30",
        // { id: 1, name: "Gluten Free" },
        // { id: 2, name: "Ketogenic" },
        // { id: 3, name: "Vegetarian" },
        // { id: 4, name: "Lacto-Vegetarian" },
        // { id: 5, name: "Ovo-Vegetarian" },
        // { id: 6, name: "Vegan" },
        // { id: 7, name: "Pescetarian" },
        // { id: 8, name: "Paleo" },
        // { id: 9, name: "Primal" },
        // { id: 10, name: "Low FODMAP" },
        // { id: 11, name: "Whole30" },
      ];
      await Diet.bulkCreate(initialDiets);
      return initialDiets;
    }

    infoApi?.forEach((diet) => {
      if (infoDB.indexOf(diet.name) !== -1) {
        infoDB.push(diet);
      }
    });

    const allInfo = infoApi.map((dieta) => {
      return { id: i++, name: dieta };
    });
    // console.log("el resultado final es:", result);

    return allInfo;
  } catch (error) {
    console.log("El error es:", error);
  }
};
module.exports = { getInfoApi, getInfoDB, getAllDiets };
// como hago pa crear dietas autimaticamente? osea sin meterle yo manualmente el id
