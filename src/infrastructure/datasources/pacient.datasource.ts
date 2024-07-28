import { PacienteModel } from "../../data";
import { VeterinarioModel } from "../../data/mongo/models/veterinario.models";
import {
  CreatePacientDto,
  PacienteDatasource,
  PacientEntity,
  UpdatePacientDto,
} from "../../domain";
import { CustomError } from "../../domain/errors/custom.error";
import { PacienteMapper } from "../mappers/paciente.mapper";

export class PacientDataSourceImpl implements PacienteDatasource {
  async getAll(): Promise<PacientEntity[]> {
    try {
      const pacients = await PacienteModel.find({});
      return pacients.map((pacient) => PacienteMapper.fromObject(pacient));
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServerError();
    }
  }
  async findById(id: string): Promise<PacientEntity> {
    try {
      const pacient = await PacienteModel.findById(id);
      if (!pacient) throw `Paciente with id ${id} not found`;
      return PacienteMapper.fromObject(pacient);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServerError();
    }
  }
  async update(
    id: string,
    updatePacientDto: UpdatePacientDto
  ): Promise<PacientEntity> {
    try {
      const paciente = await PacienteModel.findById(id);
      if (!paciente) throw CustomError.notFound("Paciente no encontrado");
      await paciente.updateOne(updatePacientDto);
      return PacienteMapper.fromObject(paciente);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServerError();
    }
  }

  async delete(id: string): Promise<PacientEntity> {
    try {
      const paciente = await PacienteModel.findById(id);
      if (!paciente)
        throw CustomError.notFound("Paciente no existe con ese id");
      const pacientData = PacienteMapper.fromObject(paciente);
      await PacienteModel.deleteOne({ _id: id });
      return pacientData;
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServerError();
    }
  }
  async create(createPacientDto: CreatePacientDto): Promise<PacientEntity> {
    try {
      const pacient = new PacienteModel(createPacientDto);
      const buscarPaciente = await PacienteModel.findOne({
        email: createPacientDto.email,
      });
      if (buscarPaciente?.email)
        throw CustomError.badRequest("Correo ya existe");
      const veterinario = await VeterinarioModel.findById(
        createPacientDto.veterinario
      );
      if (!veterinario) throw CustomError.notFound("Veterinario no existe");
      await pacient.save();
      return PacienteMapper.fromObject(pacient);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServerError();
    }
  }
}
