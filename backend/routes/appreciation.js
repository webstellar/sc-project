const express = require("express");
const router = express.Router();

//routes interact with the controllers
const {
  getAppreciations,
  newAppreciation,
} = require("../controllers/appreciationControllers");

//GET Appreciation and link
router.route("/appreciations").get(getAppreciations);

//POST Apprecation and link
router.route("/appreciation/new").post(newAppreciation);

module.exports = router;
