// import { v4 as uuidv4 } from "uuid";
export const generarId = () => {
  return Date.now().toString(32) + Math.random().toString(32).substring(2);
  //   uuidv4();
};
