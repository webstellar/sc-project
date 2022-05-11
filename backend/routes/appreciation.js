const express = require("express");
const router = express.Router();

//routes interact with the controllers
const { getAppreciations } = require("../controllers/appreciationControllers");

router.route("/appreciations").get(getAppreciations);

module.exports = router;
