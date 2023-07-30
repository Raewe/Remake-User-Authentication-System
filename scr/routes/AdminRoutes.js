import express from "express";

import AdminController from "../controllers/AdminController.js";

const router = express.Router();

router.get("/", AdminController.home);
router.post("/", AdminController.getName);

export default router;
