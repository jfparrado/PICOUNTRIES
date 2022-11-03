const { Router } = require("express");
const { Diet } = require("../../db");
const router = Router();
const { getInfoApi, getInfoDB, getAllDiets } = require("../controllers/diet");
router.get("/", async (req, res) => {
  try {
    const allDiets = await getAllDiets();
    res.status(200).send(allDiets);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const cuerpo = req.body;
    if (!name) {
      return res.status(404).send("Falta enviar datos obligatorios");
    }
    const newDiet = await Diet.create(cuerpo);
    res.status(200).send(newDiet);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
// Obtener todos los tipos de dieta posibles
// En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá
module.exports = router;
