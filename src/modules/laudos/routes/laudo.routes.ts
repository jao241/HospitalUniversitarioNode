import { Router } from "express";
import LaudoController from "../controllers/LaudoController";
import multer from "multer";
import {celebrate, Segments, Joi} from "celebrate";
import autenticarToken from "../../../shared/middlewares/TokenAutentication";

const laudoRoutes = Router();
const laudoController = new LaudoController();
const upload = multer({
    dest: "uploads/"
});

laudoRoutes.post("/", 
upload.single("conclusao"),
autenticarToken, 
celebrate({
    [Segments.BODY]:{
        descricao: Joi.string().required(),
        conclusao: Joi.required(),
        status: Joi.string().required(),
        paciente_id: Joi.string().uuid().required(),
        medico_id: Joi.string().uuid().required()
    }
})
, laudoController.create);
laudoRoutes.get("/", autenticarToken, laudoController.index);
laudoRoutes.get("/:id", 
celebrate({
    [Segments.PARAMS]:{
        id: Joi.string().uuid().required()
    }
})
, laudoController.show);
laudoRoutes.put("/:id", 
upload.single("conclusao"),
autenticarToken,
celebrate({
    [Segments.PARAMS]:{
        id: Joi.string().uuid().required()
    },
    [Segments.BODY]:{
        descricao: Joi.string().required(),
        conclusao: Joi.required(),
        status: Joi.string().required(),
        paciente_id: Joi.string().uuid().required(),
        medico_id: Joi.string().uuid().required()
    }
})
, laudoController.update);
laudoRoutes.delete("/:id",
autenticarToken,
celebrate({
    [Segments.PARAMS]:{
        id: Joi.string().uuid().required()
    }
})
, laudoController.delete);
export default laudoRoutes;