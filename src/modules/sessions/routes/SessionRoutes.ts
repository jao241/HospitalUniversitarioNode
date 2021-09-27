import { celebrate, Segments } from "celebrate";
import { Router } from "express";
import Joi from "joi";
import SessionController from "../controllers/SessionController";

const sessionController = new SessionController();
const sessionRoutes = Router();

sessionRoutes.post("/", celebrate({
    [Segments.BODY]:{
        crm:Joi.string().required(),
        senha:Joi.string().required()
    }
}), sessionController.crate);

export default sessionRoutes;