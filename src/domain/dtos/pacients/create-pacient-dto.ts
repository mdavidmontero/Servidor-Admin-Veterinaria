export class CreatePacientDto {
  private constructor(
    public readonly nombre: string,
    public readonly telefono: string,
    public readonly propietario: string,
    public readonly email: string,
    public readonly fecha: Date,
    public readonly sintomas: string,
    public readonly veterinario: string
  ) {}

  static create(props: { [key: string]: any }): [string?, CreatePacientDto?] {
    const {
      nombre,
      telefono,
      propietario,
      email,
      fecha = new Date(),
      sintomas,
      veterinario,
    } = props;
    if (!nombre) return ["nombre es requerido", undefined];
    if (!telefono) return ["telefono es requerido", undefined];
    if (!propietario) return ["propietario es requerido", undefined];
    if (!email) return ["email es requerido", undefined];
    if (!fecha) return ["fecha es requerido", undefined];
    if (!sintomas) return ["Los Sintomas son requeridos", undefined];
    if (!veterinario) return ["veterinario es requerido", undefined];
    return [
      undefined,
      new CreatePacientDto(
        nombre,
        telefono,
        propietario,
        email,
        fecha,
        sintomas,
        veterinario
      ),
    ];
  }
}

// nombre
// telefono
// email
// fecha
// veterinario
