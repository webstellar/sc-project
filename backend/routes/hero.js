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
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/heroes").get(getHeroes);
router.route("/hero/:id").get(getSingleHero);
router
  .route("/hero/:heroid/:appreciationid")
  .post(isAuthenticatedUser, associateHeroAppreciations);

//Users
router.route("/hero/new").post(isAuthenticatedUser, newHero);
router
  .route("/hero/:id")
  .put(isAuthenticatedUser, updateHero)
  .delete(isAuthenticatedUser, deleteHero);

// Admin
router.route("/hero/new").post(isAuthenticatedUser, newHero);

router.route("/admin/heroes").get(getAdminHeroes);

router
  .route("/hero/:id")
  .put(isAuthenticatedUser, updateHero)
  .delete(isAuthenticatedUser, deleteHero);

module.exports = router;
