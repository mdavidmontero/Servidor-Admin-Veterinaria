import { bcryptAdapter } from "../../config";
import { VeterinarioModel } from "../../data";
import { VeterinarioDatasource } from "../../domain/datasources/veterinario.datasource";
import { CreateVetDto } from "../../domain/dtos/veterinarians/create-vet.dto";
import { VeterinarioEntity } from "../../domain/entities/veterinario.entity";
import { CustomError } from "../../domain/errors/custom.error";
import { VeterinarioMapper } from "../mappers/veterinario.mapper";

export class VeterinarioDatasourceImpl implements VeterinarioDatasource {
  async register(createVetDto: CreateVetDto): Promise<VeterinarioEntity> {
    try {
      const veterinario = await VeterinarioModel.findOne({
        email: createVetDto.email,
      });
      if (veterinario) throw "El veterinario ya existe";
      const vet = new VeterinarioModel(createVetDto);
      vet.password = bcryptAdapter.hash(createVetDto.password, 10);
      await vet.save();
      return VeterinarioMapper.fromObject(vet);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServerError();
    }
  }
}
