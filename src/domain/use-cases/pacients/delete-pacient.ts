import { PacientEntity } from "../../entities/pacient.entity";
import { PacienteRepository } from "../../repository/pacient.repository";

interface DeletePacienteUseCase {
  execute(id: string): Promise<PacientEntity>;
}

export class DeletePaciente implements DeletePacienteUseCase {
  constructor(private readonly repository: PacienteRepository) {}
  execute(id: string): Promise<PacientEntity> {
    return this.repository.delete(id);
  }
}
