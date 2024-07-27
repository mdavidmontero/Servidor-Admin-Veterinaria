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
    updatePacientDto: CreatePacientDto
  ): Promise<PacientEntity> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<PacientEntity> {
    throw new Error("Method not implemented.");
  }

  create(createPacientDto: CreatePacientDto): Promise<PacientEntity> {
    return this.datasource.create(createPacientDto);
  }
}
