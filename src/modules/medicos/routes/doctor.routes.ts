import { Router } from "express";
import DoctorController from "../controllers/DoctorController";
import { celebrate, Segments, Joi } from "celebrate";
import autenticarToken from "../../../shared/middlewares/TokenAutentication";

const doctorRoutes = Router();
const doctorController = new DoctorController();

doctorRoutes.post("/", autenticarToken, celebrate({
    [Segments.BODY]:{
        nome:Joi.string().required(),
        crm:Joi.string().required(),
        cpf:Joi.string().required(),
        tipo:Joi.string().required(),
        senha:Joi.string().required(),
        ano_residencia:Joi.number().required(),
        titulacao:Joi.string().required()
    }
}), doctorController.create);
doctorRoutes.get("/", autenticarToken, doctorController.index);
doctorRoutes.get("/:id", celebrate({
    [Segments.PARAMS]:{
        id:Joi.string().uuid()
    }
}), doctorController.listOneDoctorById);
doctorRoutes.get("/name/:nome", autenticarToken, celebrate({
    [Segments.PARAMS]:{
        nome:Joi.string().required()
    }
}), doctorController.listOneDoctorByName);
doctorRoutes.get("/cpf/:cpf", autenticarToken, celebrate({
    [Segments.PARAMS]:{
        cpf:Joi.string().required()
    }
}), doctorController.listOneDoctorByCPF);
doctorRoutes.get("/crm/:crm", autenticarToken, celebrate({
    [Segments.PARAMS]:{
        crm:Joi.string().required()
    }
}), doctorController.listOneDoctorByCRM);
doctorRoutes.put("/:id", autenticarToken, celebrate({
    [Segments.PARAMS]:{
        id:Joi.string().uuid().required()
    }
}), doctorController.update);
doctorRoutes.delete("/:id", autenticarToken, celebrate({
    [Segments.PARAMS]:{
        id:Joi.string().uuid().required()
    }
}), doctorController.delete);

export default doctorRoutes;