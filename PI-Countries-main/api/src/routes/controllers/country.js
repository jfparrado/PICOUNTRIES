const axios = require("axios");
const { Country, Activity } = require("../../db");

const getAllInfo = async () => {
  let infoCountries = await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  if (infoCountries.length === 0) {
    // vemos si no hay cosas dentro de la DB
    try {
      const infoApi = await axios.get(`https://restcountries.com/v3/all`);
      const data = infoApi.data; //trae la info
      infoCountries = data?.map((country) => {
        return {
          //aca devuelve un obj que contiene la info de cada country
          cca3: country.cca3,
          name: country.name.official,
          flags: country.flags[0], // esto es pa que quito los []
          region: country.region,
          capital: country.capital ? country.capital : ["No capital"],
          subregion: country.subregion,
          area: country.area,
          population: country.population,
        };
      });
      await Country.bulkCreate(infoCountries);
      let allCountries = await Country.findAll({
        include: {
          model: Activity,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
      return allCountries;
    } catch (error) {
      console.log(
        "El error controller country getInfoApi if es:",
        error.message
      );
      throw new Error(
        "El error controller country getInfoApi es:",
        error.message
      );
    }
  } else {
    //si ya hay algo
    try {
      return infoCountries;
    } catch (error) {
      console.log(
        "El error controller country getInfoApi else es:",
        error.message
      );
      throw new Error(
        "El error controller country getInfoApi es:",
        error.message
      );
    }
  }
};
const getById = async (idCountry) => {
  try {
    const allInfo = await Country.findAll({
      include: { model: Activity },
    });
    const result = allInfo.filter(
      (country) => country.cca3.toString() === idCountry.toString()
    );
    return result;
  } catch (error) {
    console.log("El error controller country getById es:", error.message);
    throw new Error("El error controller recipe getById es:", error.message);
  }
};
const deleteCountryById = async (idCountry) => {
  try {
    const countryInfo = await Country.findOne({
      where: { cca3: idCountry },
    });
    await countryInfo.destroy();
  } catch (error) {
    console.log(
      "El error controller country deleteCountryById es:",
      error.message
    );
    throw new Error(
      "El error controller recipe deleteCountryById es:",
      error.message
    );
  }
};
module.exports = { getAllInfo, getById, deleteCountryById };
