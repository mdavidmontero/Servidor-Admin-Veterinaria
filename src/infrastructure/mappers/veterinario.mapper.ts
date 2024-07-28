import { VeterinarioEntity } from "../../domain/entities/veterinario.entity";
import { CustomError } from "../../domain/errors/custom.error";

export class VeterinarioMapper {
  static fromObject(object: { [key: string]: any }): VeterinarioEntity {
    const {
      id,
      _id,
      nombre,
      email,
      password,
      token,
      confirmado,
      telefono,
      web,
    } = object;
    if (!_id && !id) CustomError.badRequest("Id es requerido");
    if (!nombre) CustomError.badRequest("Nombre es requerido");
    if (!email) CustomError.badRequest("Email es requerido");
    if (!password) CustomError.badRequest("Password es requerido");
    return new VeterinarioEntity(
      _id || id,
      nombre,
      email,
      password,
      token,
      confirmado,
      telefono,
      web
    );
  }
}
