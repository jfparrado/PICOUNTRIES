const axios = require("axios");
const { Router } = require("express");
const { Recipe, Diet } = require("../../db");
const router = Router();
const { getAllInfo, getById } = require("../controllers");

router.get("/:idReceta", async (req, res) => {
  const { idReceta } = req.params;
  console.log(idReceta);
  const { name, summary, healthScore, steps } = req.query;
  let atributos = [];
  if (name) atributos.push("name");
  if (summary) atributos.push("summary");
  if (healthScore) atributos.push("healthScore");
  if (steps) atributos.push("steps");

  try {
    const receta = await getById(idReceta);
    if (!receta) {
      return res.status(204).send("that id does not exist in the database");
    } else {
      return res.status(200).send(receta);
    }
  } catch (error) {
    res.status(401).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    let todasRecetas = await getAllInfo();

    if (name) {
      let recetasFiltradas = info.filter(
        (
          receta //cada receta
        ) => receta.name.toLowerCase().includes(name.toLowerCase()) //va a buscar si es un su campo nombre(en minuscula) se encuentra la palabra del query (tambien en minuscula)
      );
      if (recetasFiltradas.length !== 0) {
        return res.status(200).send(recetasFiltradas);
      } else {
        return res
          .status(204)
          .send("there is no recipe with that word on its name");
      }
    } else {
      res.status(200).send(todasRecetas);
    }
  } catch (error) {
    res.status(error.number).send(error.message);
  }
});
router.post("/", async (req, res) => {
  const { id, name, summary, healthScore, steps, image, dishTypes, diets } =
    req.body;
  const cuerpo = { id, name, summary, healthScore, steps, image, dishTypes };
  try {
    if (!name || !summary || !healthScore || !steps) {
      return res.status(404).send("Falta enviar datos obligatorios");
    }
    const dietInfo = await Diet.findAll({
      //esto que es?
      where: { name: diets },
    });

    const newRecipe = await Recipe.create(cuerpo);
    console.log("bandera");
    newRecipe.addDiets(dietInfo);
    res.status(201).json(newRecipe); //201 es que fue creado
  } catch (error) {
    res.status(401).send(error.message);
  }
});
module.exports = router;
