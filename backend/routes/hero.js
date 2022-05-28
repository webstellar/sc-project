const express = require("express");
const router = express.Router();

//routes interact with the controllers
const {
  getHeroes,
  newHero,
  getSingleHero,
  updateHero,
  deleteHero,
  associateHeroAppreciations,
} = require("../controllers/heroControllers");

//Get All Heroes
router.route("/heroes").get(getHeroes);

//Get A Single Hero
router.route("/hero/:id").get(getSingleHero);

//Put and Edit a Single Hero
//Delete Single Hero
router.route("/admin/hero/:id").put(updateHero).delete(deleteHero);

//Post a Hero to the DB
router.route("/hero/new").post(newHero);

//Post a Hero and Apprecation Association
router.route("/hero/:heroid/:appreciationid").post(associateHeroAppreciations);

module.exports = router;
