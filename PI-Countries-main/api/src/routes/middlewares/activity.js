const { Router } = require("express");
const { Country, Activity } = require("../../db");
const router = Router();
const { getInfoDB, postActivity } = require("../controllers/activity");

router.post("/", async (req, res) => {
  try {
    const { country, name, difficulty, duration, season } = req.body;
    const bodyInfo = { name, difficulty, duration, season };
    if (!name || !difficulty || !duration || !season) {
      return res.status(404).send("Falta enviar datos obligatorios");
    }
    const result = await postActivity(bodyInfo, country);
    res.status(201).json(result.dataValues); //201 es que fue creado
  } catch (error) {
    console.log("El error middleware activity post / es:", error.message);
    res
      .status(401)
      .send("El error middleware activity post / es:", error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    console.log("hola");
    const result = await getInfoDB();
    res.status(201).json(result); //201 es que fue creado
  } catch (error) {
    console.log("El error middleware activity post / es:", error.message);
    res
      .status(401)
      .send("El error middleware activity post / es:", error.message);
  }
});
module.exports = router;
