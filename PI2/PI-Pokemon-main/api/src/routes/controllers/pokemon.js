const axios = require("axios");
const { Pokemon, Type } = require("../../db");

const getInfoApi = async () => {
  let i = 0;
  try {
    const infoApi = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=40"
    );
    const data = infoApi.data.results;
    const urls = data?.map((pokemon) => {
      return pokemon.url;
    });
    const allInfo = await axios.all(
      urls.map((endpoint) => axios.get(endpoint))
    );
    const requiredInfo = allInfo.map((pokemon) => {
      return {
        id: pokemon.data.id,
        name: pokemon.data.name,
        hp: pokemon.data.stats[0].base_stat,
        attack: pokemon.data.stats[1].base_stat,
        defense: pokemon.data.stats[2].base_stat,
        speed: pokemon.data.stats[5].base_stat,
        heigth: pokemon.data.height,
        weight: pokemon.data.weight,
      };
    });
    return requiredInfo; //este es un array con todas las recetas
  } catch (error) {
    console.log("El error controller pokemon getInfoApi es:", error.message);
  }
};
const getInfoDB = async () => {
  try {
    const dbInfo = await Pokemon.findAll({
      include: {
        //incluye el modelo dieta y el nombre todas las dietas
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [], //que lo traiga a travez de los atributos
        },
      },
    });
    return dbInfo;
  } catch (error) {
    console.log("error en controllers pokemon getdb es:", error.message);
  }
};

const getAllInfo = async () => {
  try {
    const infoApi = await getInfoApi();

    const infoDB = await getInfoDB();
    const allInfo = [...infoApi, ...infoDB];
    return allInfo;
  } catch (error) {
    console.log("El error controllers pokemon getAllInfo es:", error.message);
  }
};
module.exports = { getAllInfo };
