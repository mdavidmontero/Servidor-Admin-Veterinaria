import { Server } from "./presentation/server";
import { envs } from "./config/env.plugins";
import { AppRoutes } from "./presentation/routes";
import { MongoDatabase } from "./data/mongo/db";

(async () => {
  main();
})();

async function main() {
  await MongoDatabase.connect({
    dbName: envs.MONGO_DB_NAME,
    mongoUrl: envs.MONGO_URL,
  });

  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  });

  server.start();
}
