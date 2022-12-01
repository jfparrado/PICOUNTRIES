const { Router } = require("express");
const { Country, Activity } = require("../../db");
const router = Router();
const { getInfoDB, postActivity } = require("../controllers/activity");

router.post("/", async (req, res) => {
  try {
    const { countries, name, difficulty, duration, seasons } = req.body;
    const bodyInfo = { name, difficulty, duration, seasons };
    if (!name || !difficulty || !duration || !seasons) {
      return res.status(404).send("Falta enviar datos obligatorios");
    }
    const existingActivity = await Activity.findOne({ where: { name: name } });
    if (existingActivity) {
      return res
        .status(406)
        .send("La actividad ya existe y no puede repetirse");
    }
    let results = await postActivity(bodyInfo, countries);
    // console.log("result es:", result[0].dataValues);
    results = results.map((result) => {
      return result.dataValues;
    });
    res.status(201).json(results); //201 es que fue creado
  } catch (error) {
    console.log("El error middleware activity post / es:", error.message);
    res
      .status(401)
      .send("El error middleware activity post / es:", error.message);
  }
});

router.get("/", async (req, res) => {
  try {
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
