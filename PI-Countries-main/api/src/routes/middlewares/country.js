const { Router } = require("express");
const router = Router();
const {
  getAllInfo,
  getById,
  deleteCountryById,
} = require("../controllers/country.js");

router.get("/:idCountry", async (req, res) => {
  const { idCountry } = req.params;
  try {
    const country = await getById(idCountry);
    if (!country) {
      return res.status(204).send("that id does not exist in the database");
    } else {
      return res.status(200).send(country);
    }
  } catch (error) {
    console.log(
      "El error middleware country get /:idCountry es:",
      error.message
    );
    res
      .status(401)
      .send("El error middleware country get /:idCountry es:", error.message);
  }
});

router.delete("/:idCountry", async (req, res) => {
  const { idCountry } = req.params;
  try {
    await deleteCountryById(idCountry);
    let allCountries = await getAllInfo();
    return res.status(200).send(allCountries);
  } catch (error) {
    console.log("El error middleware country delete / es:", error.message);
    res
      .status(error.number)
      .send("El error middleware country delete / es:", error.message);
  }
});

router.get("/", async (req, res) => {
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
  try {
    const { name } = req.query;
    let allCountries = await getAllInfo();
    if (name) {
      //en caso de que se busque por la searchbar
      let filterCountries = allCountries.filter(
        (country) => country.name.toLowerCase().includes(name.toLowerCase()) //va a buscar si es un su campo nombre(en minuscula) se encuentra la palabra del query (tambien en minuscula)
      );
      if (filterCountries.length !== 0) {
        return res.status(200).send(filterCountries);
      } else {
        filterCountries = empty;
        return res.status(204).send(filterCountries);
      }
    } else {
      //cuando no hay nada en el searchbar que mande todo
      if (allCountries.length === 0) {
        allCountries = empty;
      } else {
        return res.status(200).send(allCountries);
      }
    }
  } catch (error) {
    console.log("El error middleware country get / es:", error.message);
    res
      .status(error.number)
      .send("El error middleware country get / es:", error.message);
  }
});
module.exports = router;
