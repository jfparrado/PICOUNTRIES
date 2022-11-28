const { Router } = require("express");
const { User } = require("../../db");
const router = Router();
const { validateEmail, getUsers } = require("../controllers/user");

router.get("/", async (req, res) => {
  try {
    const allUsers = await getUsers();
    res.status(200).send(allUsers);
  } catch (error) {
    console.log("el error de middlewares user get es: ", error.message);
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const cuerpo = { name, email, password };
    if (!name || !email || !password) {
      console.log(
        "el error de middlewares user post es: Falta enviar datos obligatorios"
      );
      return res.status(404).send("Falta enviar datos obligatorios");
    }
    if (!validateEmail(email)) {
      console.log(
        "el error de middleware user post: " + email + " is valid :)"
      );
      return res.status(403).send("el email es invalido");
    }
    const newUser = await User.create(cuerpo);
    res.status(201).json(newUser); //201 es que fue creado
  } catch (error) {
    console.log("el error de middlewares user post es: ", error.message);
    res.status(400).send(error.message);
  }
});
module.exports = router;
