import { Router } from "express";
import LaudoController from "../controllers/LaudoController";
import multer from "multer";

const laudoRoutes = Router();
const laudoController = new LaudoController();
const upload = multer({
    storage: multer.memoryStorage()
});

laudoRoutes.post("/", upload.single("image_laudo"), laudoController.create);

export default laudoRoutes;