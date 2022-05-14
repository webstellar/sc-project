const express = require("express");
const router = express.Router();

//routes interact with the controllers
const { getHeroes } = require("../controllers/heroControllers");

router.route("/heros").get(getHeroes);

module.exports = router;
