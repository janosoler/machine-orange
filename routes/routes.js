import express from "express";
import {getLandingPage, sendDataToGoogleAPIForClassify} from "../controller.js";

const router = express.Router();

router.get("/", getLandingPage);

router.post("/classificator", sendDataToGoogleAPIForClassify);


export {router};
