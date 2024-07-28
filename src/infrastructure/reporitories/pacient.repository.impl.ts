import { UpdatePacientDto } from "../../domain/dtos/pacients/update-pacient-dto";
import {
  CreatePacientDto,
  PacienteDatasource,
  PacientEntity,
  PacienteRepository,
} from "../../domain";

export class PacientRepositoryImpl implements PacienteRepository {
  constructor(private readonly datasource: PacienteDatasource) {}
  getAll(): Promise<PacientEntity[]> {
    return this.datasource.getAll();
  }
  findById(id: string): Promise<PacientEntity> {
    return this.datasource.findById(id);
  }
  update(
    id: string,
    updatePacientDto: UpdatePacientDto
  ): Promise<PacientEntity> {
    return this.datasource.update(id, updatePacientDto);
  }
  delete(id: string): Promise<PacientEntity> {
    return this.datasource.delete(id);
  }

  create(createPacientDto: CreatePacientDto): Promise<PacientEntity> {
    return this.datasource.create(createPacientDto);
  }
}
