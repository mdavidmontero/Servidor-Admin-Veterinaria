import { PacienteModel } from "../../data";
import {
  CreatePacientDto,
  PacienteDatasource,
  PacientEntity,
  UpdatePacientDto,
} from "../../domain";

export class PacientDataSourceImpl implements PacienteDatasource {
  async getAll(): Promise<PacientEntity[]> {
    const pacients = await PacienteModel.find({});
    return pacients.map((pacient) => PacientEntity.fromObject(pacient));
  }
  async findById(id: string): Promise<PacientEntity> {
    const pacient = await PacienteModel.findById(id);
    console.log(pacient);
    if (!pacient) throw `Paciente with id ${id} not found`;
    return PacientEntity.fromObject(pacient);
  }
  async update(
    id: string,
    updatePacientDto: UpdatePacientDto
  ): Promise<PacientEntity> {
    const paciente = await PacienteModel.findById(id);
    if (!paciente) throw `Paciente no existe con ese id`;
    await paciente.updateOne(updatePacientDto);
    return PacientEntity.fromObject(paciente);
  }

  async delete(id: string): Promise<PacientEntity> {
    const paciente = await PacienteModel.findById(id);
    if (!paciente) throw `Paciente no existe con ese id`;
    const pacientData = PacientEntity.fromObject(paciente);
    await PacienteModel.deleteOne({ _id: id });
    return pacientData;
  }
  async create(createPacientDto: CreatePacientDto): Promise<PacientEntity> {
    const pacient = new PacienteModel(createPacientDto);
    await pacient.save();
    return PacientEntity.fromObject(pacient);
  }
}
