const express = require("express");
const router = express.Router();

//routes interact with the controllers
const {
  getAppreciations,
  newAppreciation,
  getSingleAppreciation,
  updateAppreciation,
  deleteAppreciation,
} = require("../controllers/appreciationControllers");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

//GET Appreciation and link
router.route("/appreciations").get(getAppreciations);

//Get Single Appreciation and Link
router.route("/appreciation/:id").get(getSingleAppreciation);

//POST Appreciation and link***********************
router.route("/user/appreciation/new").post(isAuthenticatedUser, newAppreciation);

//Put Single Appreciation and Edit****************
//Delete Single Appreciation
router
  .route("/user/appreciation/:id")
  .put(isAuthenticatedUser, updateAppreciation)
  .delete(isAuthenticatedUser, deleteAppreciation);

module.exports = router;
