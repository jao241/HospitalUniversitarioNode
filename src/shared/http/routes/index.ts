import { Router } from "express";
import doctorRoutes from "../../../modules/medicos/routes/doctor.routes";
import patientRoutes from "../../../modules/pacientes/routes/patient.routes";

const routes = Router();

routes.use("/patients", patientRoutes);
routes.use("/doctors", doctorRoutes);

export default routes;