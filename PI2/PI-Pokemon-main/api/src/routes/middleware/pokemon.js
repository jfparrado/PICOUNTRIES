const axios = require("axios");
const { Router } = require("express");
const { Pokemon, Type } = require("../../db");
const router = Router();
const { getAllInfo } = require("../controllers/pokemon.js");

router.get("/", async (req, res) => {
  try {
    let allPokemons = await getAllInfo();
    res.status(200).json(allPokemons);
  } catch (error) {
    console.log("el error de middleware pokemon es:", error.message);
    res.status(400).send("el error de middleware pokemon es:", error.message);
  }
});
module.exports = router;
