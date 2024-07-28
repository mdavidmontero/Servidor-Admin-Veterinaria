import { PacientEntity } from "../../entities/pacient.entity";
import { PacienteRepository } from "../../repository/pacient.repository";
import { UpdatePacientDto } from "../../dtos/pacients/update-pacient-dto";

export interface updatePacienteUseCase {
  execute(
    id: string,
    updatePacientDto: UpdatePacientDto
  ): Promise<PacientEntity>;
}

export class UpdatePaciente implements updatePacienteUseCase {
  constructor(private readonly repository: PacienteRepository) {}
  execute(
    id: string,
    updatePacientDto: UpdatePacientDto
  ): Promise<PacientEntity> {
    return this.repository.update(id, updatePacientDto);
  }
}
