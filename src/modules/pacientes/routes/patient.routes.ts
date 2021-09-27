import { Router } from "express";
import PatientController from "../controllers/PatientController";
import { celebrate, Segments, Joi } from "celebrate";
const patientRoutes = Router();
const patientController = new PatientController();

patientRoutes.post("", celebrate({
    [Segments.BODY]:{
        nome: Joi.string().required(),
        genero:Joi.string().required(),
        cor:Joi.string().required(),
        cpf:Joi.string().required(),
        data_nascimento:Joi.date().required()
    }
}), patientController.create);
patientRoutes.get("", patientController.index);
patientRoutes.get("/:id", celebrate({
    [Segments.PARAMS]:{
        id:Joi.string().uuid().required()
    }
}), patientController.showById);
patientRoutes.get("/nome/:nome", celebrate({
    [Segments.PARAMS]:{
        nome:Joi.string().required()
    }
}), patientController.showByNome);
patientRoutes.get("/cpf/:cpf", celebrate({
    [Segments.PARAMS]:{
        cpf:Joi.string().required()
    }
}), patientController.showByCPF);
patientRoutes.put("/:id", celebrate({
    [Segments.PARAMS]:{
        id:Joi.string().uuid().required()
    }
}), patientController.update);
patientRoutes.delete("/:id", celebrate({
    [Segments.PARAMS]:{
        id:Joi.string().uuid().required()
    }
}), patientController.delete);

export default patientRoutes;