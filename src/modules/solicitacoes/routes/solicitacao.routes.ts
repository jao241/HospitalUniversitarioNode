import { Router } from "express";
import SolicitacaoController from "../controllers/SolicitacaoController";
import { celebrate, Segments, Joi } from "celebrate";
const solicitacaoRoutes = Router();
const solicitacaoController = new SolicitacaoController();

solicitacaoRoutes.post("/", celebrate({
    [Segments.BODY]:{
        medico_crm:Joi.string().required()
    }
}), solicitacaoController.create);
solicitacaoRoutes.get("/", solicitacaoController.index);
solicitacaoRoutes.get("/:id", solicitacaoController.show);
solicitacaoRoutes.put("/:id", solicitacaoController.update);
solicitacaoRoutes.delete("/:id", solicitacaoController.delete);

export default solicitacaoRoutes;