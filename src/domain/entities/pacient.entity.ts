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

  public static fromObject(object: { [key: string]: any }): PacientEntity {
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
    if (!_id && !id) throw "Id es requerido";
    if (!nombre) throw "Nombre es requerido";
    if (!telefono) throw "Telefono es requerido";
    if (!propietario) throw "Propietario es requerido";
    if (!email) throw "Email es requerido";
    if (!fecha) throw "Fecha es requerida";
    if (!veterinario) "Veterinario es Obligatorio";

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
