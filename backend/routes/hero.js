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
  getAdminHeroes,
} = require("../controllers/heroControllers");
const { isAuthenticatedUser } = require("../middlewares/auth");

router.route("/heroes").get(getHeroes);
router.route("/admin/heroes").get(getAdminHeroes);
router.route("/hero/:id").get(getSingleHero);
router.route("/user/hero/new").post(isAuthenticatedUser, newHero);
router
  .route("/hero/:heroid/:appreciationid")
  .post(isAuthenticatedUser, associateHeroAppreciations);
router
  .route("/user/hero/:id")
  .put(isAuthenticatedUser, updateHero)
  .delete(isAuthenticatedUser, deleteHero);

module.exports = router;
