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

//GET Appreciation and link
router.route("/appreciations").get(getAppreciations);

//Get Single Appreciation and Link
router.route("/appreciation/:id").get(getSingleAppreciation);

//Put Single Appreciation and Edit****************
//Delete Single Appreciation
router
  .route("/admin/appreciation/:id")
  .put(updateAppreciation)
  .delete(deleteAppreciation);

//POST Apprecation and link***********************
router.route("/appreciation/new").post(newAppreciation);

module.exports = router;
