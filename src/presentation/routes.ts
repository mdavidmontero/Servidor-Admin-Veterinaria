import { Router } from "express";

import { PacientRoutes } from "./pacientes/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/pacientes", PacientRoutes.routes);
    return router;
  }
}
