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
}
