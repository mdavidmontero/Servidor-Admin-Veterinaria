import { PacienteModel } from "../../data";
import {
  CreatePacientDto,
  PacienteDatasource,
  PacientEntity,
} from "../../domain";

export class PacientDataSourceImpl implements PacienteDatasource {
  async getAll(): Promise<PacientEntity[]> {
    const pacients = await PacienteModel.find({});
    return pacients.map((pacient) => PacientEntity.fromObject(pacient));
  }
  async findById(id: string): Promise<PacientEntity> {
    const pacient = await PacienteModel.findById(id);
    console.log(pacient);
    if (!pacient) throw `Todo with id ${id} not found`;
    return PacientEntity.fromObject(pacient);
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
  async create(createPacientDto: CreatePacientDto): Promise<PacientEntity> {
    const pacient = new PacienteModel(createPacientDto);
    await pacient.save();
    return PacientEntity.fromObject(pacient);
  }
}
