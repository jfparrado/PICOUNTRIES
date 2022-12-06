const axios = require("axios");
const { Country_Activity } = require("../../db");
const getAllInfo = async () => {
  let allInfo = await Country_Activity.findAll();
  return allInfo;
};
module.exports = { getAllInfo };
