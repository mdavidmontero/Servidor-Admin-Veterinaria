import { Validators } from "../../config";

export class PacientEntity {
  constructor(
    public id: string,
    public nombre: string,
    public telefono: string,
    public propieario: string,
    public email: string,
    public fecha: Date | null,
    public veterinario: string
  ) {}
}
