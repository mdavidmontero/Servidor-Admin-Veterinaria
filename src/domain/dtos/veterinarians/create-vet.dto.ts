export class CreateVetDto {
  private constructor(
    public readonly nombre: string,
    public readonly email: string,
    public readonly password: string,
    public readonly confirmado: boolean = false
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateVetDto?] {
    const { nombre, email, password, confirmado = false } = props;
    if (!nombre) return ["El nombre es requerido"];
    if (!email) return ["El email es requerido"];
    if (!password) return ["La contraseña es requerida"];
    if (password.length < 6) return ["Password to short"];

    return [undefined, new CreateVetDto(nombre, email, password, confirmado)];
  }
}
