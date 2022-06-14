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
const { isAuthenticatedUser } = require("../middlewares/auth");

//Get All Heroes
router.route("/heroes").get(getHeroes);

//Get A Single Hero
router.route("/hero/:id").get(getSingleHero);

//Post a Hero to the DB
router.route("/user/hero/new").post(isAuthenticatedUser, newHero);

//Post a Hero and Apprecation Association
router
  .route("/hero/:heroid/:appreciationid")
  .post(isAuthenticatedUser, associateHeroAppreciations);

//Put and Edit a Single Hero
//Delete Single Hero
router
  .route("/user/hero/:id")
  .put(isAuthenticatedUser, updateHero)
  .delete(isAuthenticatedUser, deleteHero);

module.exports = router;
