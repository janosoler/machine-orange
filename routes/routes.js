const express = require("express");
const controller = require("../controller");
//import upload from '../public/src/multerConfig.js';

const router = express.Router();

router.get("/", controller.getLandingPage);

//router.post("/classification-result", controller.getResults);


module.exports = router;
