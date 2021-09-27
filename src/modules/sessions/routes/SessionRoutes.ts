import { celebrate, Segments, Joi } from "celebrate";
import { Router } from "express";
import SessionController from "../controllers/SessionController";

const sessionController = new SessionController();
const sessionRoutes = Router();

sessionRoutes.post("/", celebrate({
    [Segments.BODY]:{
        crm:Joi.string().required(),
        senha:Joi.string().required()
    }
}), sessionController.create);

export default sessionRoutes;