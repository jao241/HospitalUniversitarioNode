import { Router } from "express";
import patientRoutes from "../../../modules/pacientes/routes/patient.routes";

const routes = Router();

routes.use("/patients", patientRoutes);

export default routes;