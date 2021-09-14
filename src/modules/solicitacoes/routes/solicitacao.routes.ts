import { Router } from "express";
import SolicitacaoController from "../controllers/SolicitacaoController";

const solicitacaoRoutes = Router();
const solicitacaoController = new SolicitacaoController();

solicitacaoRoutes.post("/", solicitacaoController.create);
solicitacaoRoutes.get("/", solicitacaoController.index);
solicitacaoRoutes.get("/:id", solicitacaoController.show);
solicitacaoRoutes.put("/:id", solicitacaoController.update);
solicitacaoRoutes.delete("/:id", solicitacaoController.delete);

export default solicitacaoRoutes;