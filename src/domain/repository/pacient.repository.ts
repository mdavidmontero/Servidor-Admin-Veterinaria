import { CreatePacientDto, PacientEntity } from "..";

export abstract class PacienteRepository {
  abstract create(createPacientDto: CreatePacientDto): Promise<PacientEntity>;
  abstract getAll(): Promise<PacientEntity[]>;
  abstract findById(id: string): Promise<PacientEntity>;
  abstract update(
    id: string,
    updatePacientDto: CreatePacientDto
  ): Promise<PacientEntity>;
  abstract delete(id: string): Promise<PacientEntity>;
}
