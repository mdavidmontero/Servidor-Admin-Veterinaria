import { CreatePacientDto, PacientEntity, UpdatePacientDto } from "..";

export abstract class PacienteRepository {
  abstract create(createPacientDto: CreatePacientDto): Promise<PacientEntity>;
  abstract getAll(): Promise<PacientEntity[]>;
  abstract findById(id: string): Promise<PacientEntity>;
  abstract update(
    id: string,
    updatePacientDto: UpdatePacientDto
  ): Promise<PacientEntity>;
  abstract delete(id: string): Promise<PacientEntity>;
}
