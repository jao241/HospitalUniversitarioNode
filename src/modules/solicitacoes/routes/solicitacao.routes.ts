import { Router } from "express";
import SolicitacaoController from "../controllers/SolicitacaoController";
import { celebrate, Segments, Joi } from "celebrate";
const solicitacaoRoutes = Router();
const solicitacaoController = new SolicitacaoController();

solicitacaoRoutes.post("/", celebrate({
    [Segments.BODY]:{
        medico_crm:Joi.string().required(),
        paciente_id:Joi.string().uuid().required(),
        status:Joi.string().required(),
        data_pedido:Joi.date().required(),
        data_exame:Joi.date().required(),
        hora_exame:Joi.string().required(),
        hipotese:Joi.string().required()
    }
}), solicitacaoController.create);
solicitacaoRoutes.get("/", solicitacaoController.index);
solicitacaoRoutes.get("/:id", celebrate({
    [Segments.PARAMS]:{
        id:Joi.string().uuid().required()
    }
}), solicitacaoController.show);
solicitacaoRoutes.put("/:id", celebrate({
    [Segments.PARAMS]:{
        id:Joi.string().uuid().required()
    }
}), solicitacaoController.update);
solicitacaoRoutes.delete("/:id", celebrate({
    [Segments.PARAMS]:{
        id:Joi.string().uuid().required()
    }
}), solicitacaoController.delete);

export default solicitacaoRoutes;