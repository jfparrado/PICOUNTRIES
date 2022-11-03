const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dietMiddleware = require("./middlewares/diet.js");
const recipeMiddleware = require("./middlewares/recipe.js");

const router = Router();

router.use("/recipes", recipeMiddleware);
router.use("/diets", dietMiddleware);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
