import { IDbConfig } from "psychopiggy";
import * as pool from "./pool";

export { default as setup } from "./setup";
export * from "./post";
export * from "./category";

export async function init(dbConfig: IDbConfig) {
  return {
    pool: await pool.init(dbConfig)
  };
}
