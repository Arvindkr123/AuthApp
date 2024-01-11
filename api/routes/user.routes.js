import express from "express";
import {testController} from "../controllers/user.Controller.js"
const router = express.Router();


router.get("/", testController);

export default router;
