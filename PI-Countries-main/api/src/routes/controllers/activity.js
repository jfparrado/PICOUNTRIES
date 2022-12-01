const axios = require("axios");
const { Country, Activity } = require("../../db");

const getInfoDB = async () => {
  try {
    const dbInfo = await Activity.findAll();
    const resultActivities = dbInfo.map((activity) => activity.dataValues);
    return resultActivities;
  } catch (error) {
    console.log("El error controller activity getInfoDB es:", error.message);
    throw new Error(
      "El error controller activity getInfoDB es:",
      error.message
    );
  }
};
const postActivity = async (bodyInfo, countries) => {
  const countryInfo = await Country.findAll({
    where: { name: countries }, //busca todos los countries
  });
  const activity = await Activity.create(bodyInfo);
  await activity.addCountry(countryInfo);
  const result = await Country.findAll({
    where: { name: countries },
    include: {
      model: Activity,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  return result;
};
module.exports = { getInfoDB, postActivity };
