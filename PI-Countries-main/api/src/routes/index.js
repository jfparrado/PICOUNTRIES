const { Router } = require("express");
const countriesMiddleware = require("./middlewares/country.js");
const activitiesMiddleware = require("./middlewares/activity.js");

const router = Router();

router.use("/countries", countriesMiddleware);
router.use("/activities", activitiesMiddleware);

module.exports = router;
