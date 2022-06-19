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
const { isAuthenticatedUser } = require("../middlewares/auth");

router.route("/appreciations").get(getAppreciations);
router.route("/admin/appreciations").get(getAdminAppreciations);
router.route("/appreciation/:id").get(getSingleAppreciation);
router
  .route("/user/appreciation/new")
  .post(isAuthenticatedUser, newAppreciation);
router
  .route("/user/appreciation/:id")
  .put(isAuthenticatedUser, updateAppreciation)
  .delete(isAuthenticatedUser, deleteAppreciation);

module.exports = router;
