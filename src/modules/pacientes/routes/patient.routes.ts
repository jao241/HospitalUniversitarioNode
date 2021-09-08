import { Router } from "express";
import PatientController from "../controllers/PatientController";
const patientRoutes = Router();
const patientController = new PatientController();

patientRoutes.post("", patientController.create);
patientRoutes.get("", patientController.index);
patientRoutes.get("/:id", patientController.showById);
patientRoutes.get("/:nome", patientController.showByNome);
patientRoutes.get("/:cpf", patientController.showByCPF);
patientRoutes.put("/:id", patientController.update);
patientRoutes.delete("/:id", patientController.delete);

export default patientRoutes;