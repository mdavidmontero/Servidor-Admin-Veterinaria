import { Router } from "express";

import { VeterinarioController } from "./controller";
import { VeterinarioDatasourceImpl } from "../../infrastructure";
import { VeterinarioRepositoryImpl } from "../../infrastructure/reporitories/veterinario.repository";

export class VeterinarioRouter {
  static get routes(): Router {
    const router = Router();
    const datasource = new VeterinarioDatasourceImpl();
    const veterinarioRepository = new VeterinarioRepositoryImpl(datasource);
    const veterinarioController = new VeterinarioController(
      veterinarioRepository
    );

    router.post("/", veterinarioController.register);
    return router;
  }
}
