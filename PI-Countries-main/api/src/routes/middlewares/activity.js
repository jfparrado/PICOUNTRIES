const { Router } = require("express");
const { Activity } = require("../../db");
const router = Router();
const {
  getInfoDB,
  postActivity,
  repeatedActivities,
} = require("../controllers/activity");

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const objActivity = req.body;
    const activityToUpdate = await Activity.findByPk(id);
    await activityToUpdate.set(objActivity);
    await activityToUpdate.save();
    res.status(200).send(activityToUpdate);
  } catch (error) {
    console.log("El error middleware activity put / es:", error.message);
    res
      .status(401)
      .send("El error middleware activity put / es:", error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { countries, name, difficulty, duration, seasons } = req.body;
    const bodyInfo = { name, difficulty, duration, seasons };
    if (!name || !difficulty || !duration || !seasons) {
      return res.status(404).send("Falta enviar datos obligatorios");
    }
    const strIds = await repeatedActivities(countries, name);
    if (strIds) {
      return res
        .status(406)
        .send(`La actividad ya esta relacionada con los ids ${strIds}`);
    }
    let results = await postActivity(bodyInfo, countries);

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
