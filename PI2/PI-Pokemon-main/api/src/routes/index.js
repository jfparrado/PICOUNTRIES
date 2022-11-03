const { Router } = require("express");
const typeMiddleware = require("../routes/middleware/type.js");
const pokemonMiddleware = require("../routes/middleware/pokemon.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/pokemon", pokemonMiddleware);
router.use("/type", typeMiddleware);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
