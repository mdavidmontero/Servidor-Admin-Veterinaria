import { Router } from "express";

import { PacienteContoller } from "./controller";
import { PacientDataSourceImpl } from "../../infrastructure/datasources/pacient.datasource";
import { PacientRepositoryImpl } from "../../infrastructure/reporitories/pacient.repository.impl";

export class PacientRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new PacientDataSourceImpl();
    const pacientRepository = new PacientRepositoryImpl(datasource);

    const pacientController = new PacienteContoller(pacientRepository);

    router.get("/", pacientController.getPacientes);
    router.get("/:id", pacientController.getPaciente);
    router.post("/", pacientController.createPacient);
    router.put("/:id", pacientController.updatePaciente);
    router.delete("/:id", pacientController.deletePaciente);
    return router;
  }
}
