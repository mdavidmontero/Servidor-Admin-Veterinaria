import { CreatePacientDto } from "../dtos/pacients/create-pacient-dto";
import { PacientEntity } from "../entities/pacient.entity";

export abstract class PacienteDatasource {
  abstract create(createPacientDto: CreatePacientDto): Promise<PacientEntity>;

  abstract getAll(): Promise<PacientEntity[]>;
  abstract findById(id: string): Promise<PacientEntity>;

  abstract update(
    id: string,
    updatePacientDto: CreatePacientDto
  ): Promise<PacientEntity>;

  abstract delete(id: string): Promise<PacientEntity>;
}
