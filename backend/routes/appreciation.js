const express = require("express");
const router = express.Router();

//routes interact with the controllers
const {
  getAppreciations,
  newAppreciation,
  getSingleAppreciation,
  updateAppreciation,
  deleteAppreciation,
  getAdminAppreciations,
} = require("../controllers/appreciationControllers");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/appreciations").get(getAppreciations);

router.route("/appreciation/:id").get(getSingleAppreciation);

//users
router
  .route("/user/appreciation/new")
  .post(isAuthenticatedUser, authorizeRoles("user"), newAppreciation);

router
  .route("/user/appreciation/:id")
  .put(isAuthenticatedUser, authorizeRoles("user"), updateAppreciation)
  .delete(isAuthenticatedUser, authorizeRoles("user"), deleteAppreciation);

//Admin
router
  .route("/admin/appreciation/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), newAppreciation);

router
  .route("/admin/appreciations")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminAppreciations);

router
  .route("/admin/appreciation/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateAppreciation)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteAppreciation);

module.exports = router;
