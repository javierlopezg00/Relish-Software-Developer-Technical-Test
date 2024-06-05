import { Router } from "express";
import { photoControllerId, photoController } from "../controllers/photos.js";

const router = Router()

router.get("/photos/:id", photoControllerId)
router.get("/photos", photoController)

export default router