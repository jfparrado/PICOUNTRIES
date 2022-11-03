const axios = require("axios");
const { Router } = require("express");
const { Pokemon, Type } = require("../../db");
const router = Router();
const { getAllInfo } = require("../controllers/type.js");

router.get("/", async (req, res) => {
  try {
    const allTypes = getAllInfo();
    console.log("se recibe: ", allTypes);
    res.status(200).json(allTypes);
  } catch (error) {
    console.log("el error de middleware type es:", error.message);
    res.status(400).send("el error de middleware type es:", error.message);
  }
});
module.exports = router;
