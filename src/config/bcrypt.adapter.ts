import { compareSync, genSaltSync, hashSync } from "bcrypt";

export const bcryptAdapter = {
  hash: (password: string, roundSalt: number) => {
    const salt = genSaltSync(roundSalt);
    return hashSync(password, salt);
  },
  compare: (password: string, hash: string) => {
    return compareSync(password, hash);
  },
};
