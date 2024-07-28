export class VeterinarioEntity {
  constructor(
    public id: string,
    public nombre: string,
    public email: string,
    public password: string,
    public token: string,
    public confirmado: boolean,
    public telefono?: string,
    public web?: string
  ) {}

  public static fromObject(object: { [key: string]: any }): VeterinarioEntity {
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
    if (!_id && !id) throw "Id es requerido";
    if (!nombre) throw "Nombre es requerido";
    if (!email) throw "Email es requerido";
    if (!password) throw "Password es requerido";
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
