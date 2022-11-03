const axios = require("axios");
const { Type } = require("../../db");

const getInfoApi = async () => {
  let i = 0;
  try {
    console.log("estoy aca");
    const infoApi = await axios.get("https://pokeapi.co/api/v2/type");
    const data = infoApi.data.results;
    const types = data?.map((type) => {
      return {
        id: type.url.split("/").at(-2), //asi sacamos el id de la url
        name: type.name,
      };
    });
    console.log("types are:", types);
    return types; //este es un array con todas las recetas
  } catch (error) {
    throw new Error("El error controller type getInfoApi es:", error);
  }
};
const getInfoDB = async () => {
  try {
    const dbInfo = await Type.findAll();
    return dbInfo;
  } catch (error) {
    throw new Error("El error controllers type getInfoDB es:", error.message);
  }
};

const getAllInfo = async () => {
  try {
    const infoApi = await getInfoApi();
    const infoDB = await getInfoDB();
    const allInfo = [...infoApi, ...infoDB];
    console.log("all info type es:", allInfo);
    return allInfo;
  } catch (error) {
    throw new Error("El error controllers type getAllInfo es:", error.message);
  }
};

module.exports = { getAllInfo };
