import { CreatePacientDto } from "../../dtos/pacients/create-pacient-dto";
import { PacientEntity } from "../../entities/pacient.entity";
import { PacienteRepository } from "../../repository/pacient.repository";

export interface CreatePacientUseCase {
  execute(dto: CreatePacientDto): Promise<PacientEntity>;
}

export class CreatePacient implements CreatePacientUseCase {
  constructor(private readonly repository: PacienteRepository) {}
  execute(dto: CreatePacientDto): Promise<PacientEntity> {
    return this.repository.create(dto);
  }
}
