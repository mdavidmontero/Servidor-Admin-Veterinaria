import { PacienteRepository } from "../../repository/pacient.repository";
import { PacientEntity } from "../../entities/pacient.entity";

export interface GetPacienteUseCase {
  execute(id: string): Promise<PacientEntity>;
}

export class GetPaciente implements GetPacienteUseCase {
  constructor(private readonly repository: PacienteRepository) {}
  execute(id: string): Promise<PacientEntity> {
    return this.repository.findById(id);
  }
}
