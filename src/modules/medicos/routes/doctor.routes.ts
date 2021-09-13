import { Router } from "express";
import DoctorController from "../controllers/DoctorController";

const doctorRoutes = Router();
const doctorController = new DoctorController();

doctorRoutes.post("/", doctorController.create);
doctorRoutes.get("/", doctorController.index);
doctorRoutes.get("/:id", doctorController.listOneDoctorById);
doctorRoutes.get("/name/:nome", doctorController.listOneDoctorByName);
doctorRoutes.get("/cpf/:cpf", doctorController.listOneDoctorByCPF);
doctorRoutes.get("/crm/:crm", doctorController.listOneDoctorByCRM);
doctorRoutes.put("/:id", doctorController.update);
doctorRoutes.delete("/:id", doctorController.delete);

export default doctorRoutes;