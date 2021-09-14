import { Router } from "express";
import laudoRoutes from "../../../modules/laudos/routes/laudo.routes";
import doctorRoutes from "../../../modules/medicos/routes/doctor.routes";
import patientRoutes from "../../../modules/pacientes/routes/patient.routes";
import solicitacaoRoutes from "../../../modules/solicitacoes/routes/solicitacao.routes";

const routes = Router();

routes.use("/patients", patientRoutes);
routes.use("/doctors", doctorRoutes);
routes.use("/solicitacoes", solicitacaoRoutes);
routes.use("/laudos", laudoRoutes);

export default routes;