const { Router } = require("express");
const countriesMiddleware = require("./middlewares/country.js");
const activitiesMiddleware = require("./middlewares/activity.js");
const countriesactivitiesMiddleware = require("./middlewares/countriesactivities.js");

const router = Router();

router.use("/countries", countriesMiddleware);
router.use("/activities", activitiesMiddleware);
router.use("/countriesactivities", countriesactivitiesMiddleware);

module.exports = router;
