import express from "express";

import AdminController from "../controllers/AdminController.js";

const router = express.Router();

router.get("/", AdminController.getHome);
router.post("/", AdminController.handleSignInPost);
router.get("/cadastrar", AdminController.getSignUpPage);
router.post("/cadastrar", AdminController.handleSignUpPost);

export default router;
