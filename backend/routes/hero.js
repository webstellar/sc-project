const express = require("express");
const router = express.Router();

//routes interact with the controllers
const { getHeroes, newHero } = require("../controllers/heroControllers");

router.route("/heroes").get(getHeroes);

router.route("/hero/new").post(newHero);

module.exports = router;
