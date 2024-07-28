import { PacienteModel } from "../../data";
import { VeterinarioModel } from "../../data/mongo/models/veterinario.models";
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
    const buscarPaciente = await PacienteModel.findOne({
      email: createPacientDto.email,
    });
    if (buscarPaciente?.email) throw "Email ya existe";
    const veterinario = await VeterinarioModel.findById(
      createPacientDto.veterinario
    );
    if (!veterinario) throw "Veterinario no existe";
    await pacient.save();
    return PacientEntity.fromObject(pacient);
  }
}
