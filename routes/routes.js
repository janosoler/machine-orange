const express = require("express");
const controller = require("../controller");

const router = express.Router();

router.get("/", controller.getLandingPage)

//router.post("/convert-images", controller.fileSavingAndConvertBase64);

module.exports = router;
