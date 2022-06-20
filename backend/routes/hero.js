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
router
  .route("/user/hero/new")
  .post(isAuthenticatedUser, authorizeRoles("user"), newHero);
router
  .route("/user/hero/:id")
  .put(isAuthenticatedUser, authorizeRoles("user"), updateHero)
  .delete(isAuthenticatedUser, authorizeRoles("user"), deleteHero);

// Admin
router
  .route("/admin/hero/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), newHero);

router
  .route("/admin/heroes")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminHeroes);

router
  .route("/admin/hero/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateHero)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteHero);

module.exports = router;
