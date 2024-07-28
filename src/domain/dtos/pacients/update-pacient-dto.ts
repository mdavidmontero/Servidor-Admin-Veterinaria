export class UpdatePacientDto {
  private constructor(
    public readonly id: string,
    public readonly nombre: string,
    public readonly telefono: string,
    public readonly propietario: string,
    public readonly email: string,
    public readonly fecha: Date,
    public readonly sintomas: string
  ) {}

  static create(props: { [key: string]: any }): [string?, UpdatePacientDto?] {
    const {
      id,
      _id,
      nombre,
      telefono,
      propietario,
      email,
      fecha = new Date(),
      sintomas,
    } = props;
    if (!_id && !id) return ["Id es requerido", undefined];
    if (!nombre) return ["nombre es requerido", undefined];
    if (!telefono) return ["telefono es requerido", undefined];
    if (!propietario) return ["propietario es requerido", undefined];
    if (!email) return ["email es requerido", undefined];
    if (!fecha) return ["fecha es requerido", undefined];
    if (!sintomas) return ["Los Sintomas es requerido", undefined];
    return [
      undefined,
      new UpdatePacientDto(
        id || _id,
        nombre,
        telefono,
        propietario,
        email,
        fecha,
        sintomas
      ),
    ];
  }
}
