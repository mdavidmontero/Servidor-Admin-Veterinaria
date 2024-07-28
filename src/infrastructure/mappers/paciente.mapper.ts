import { Validators } from "../../config";
import { PacientEntity } from "../../domain";
import { CustomError } from "../../domain/errors/custom.error";

export class PacienteMapper {
  static fromObject(object: { [key: string]: any }): PacientEntity {
    const {
      id,
      _id,
      nombre,
      telefono,
      propietario,
      email,
      fecha,
      veterinario,
    } = object;
    if (!_id && !id) CustomError.badRequest("Id es requerido");
    if (!nombre) CustomError.badRequest("Nombre es requerido");
    if (!telefono) CustomError.badRequest("Telefono es requerido");
    if (!propietario) CustomError.badRequest("Propietario es requerido");
    if (!email) CustomError.badRequest("Email es requerido");
    if (!fecha) CustomError.badRequest("Fecha es requerido");
    if (!veterinario) CustomError.badRequest("Veterinario es requerido");
    if (!Validators.isMongoId(veterinario))
      CustomError.notFound("Id de Veterinario Invalido");

    return new PacientEntity(
      _id || id,
      nombre,
      telefono,
      propietario,
      email,
      fecha,
      veterinario
    );
  }
}
