const { Router } = require("express");
const router = Router();
const { getAllInfo } = require("../controllers/countriesactivities.js");

router.get("/", async (req, res) => {
  try {
    let allCountries = await getAllInfo();
    return res.status(200).send(allCountries);
  } catch (error) {
    console.log(
      "El error middleware countriesactivities get / es:",
      error.message
    );
    res
      .status(error.number)
      .send("El error middleware countriesactivities get / es:", error.message);
  }
});
module.exports = router;
