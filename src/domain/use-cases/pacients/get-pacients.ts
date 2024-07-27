import { PacientEntity } from "../../entities/pacient.entity";
import { PacienteRepository } from "../../repository/pacient.repository";

export interface GetPacientsUseCase {
  execute(): Promise<PacientEntity[]>;
}
export class GetPacients implements GetPacientsUseCase {
  constructor(private readonly repository: PacienteRepository) {}

  execute(): Promise<PacientEntity[]> {
    return this.repository.getAll();
  }
}
