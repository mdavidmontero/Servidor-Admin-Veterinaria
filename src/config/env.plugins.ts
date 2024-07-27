import "dotenv/config";
import * as env from "env-var";

export const envs = {
  PORT: env.get("PORT").required().asPortNumber(),
  MONGO_URL: env.get("MONGO_URL").required().asString(),
  MONGO_DB_NAME: env.get("MONGO_DB_NAME").required().asString(),
  JWT_SECRET: env.get("JWT_SECRET").required().asString(),
  FRONTEND_URL: env.get("FRONTEND_URL").required().asString(),
};
