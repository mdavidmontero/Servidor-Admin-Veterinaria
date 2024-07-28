import { Router } from "express";

import { PacientRoutes } from "./pacientes/routes";
import { VeterinarioRouter } from "./veterinario/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/pacientes", PacientRoutes.routes);
    router.use("/api/veterinarios", VeterinarioRouter.routes);

    return router;
  }
}
