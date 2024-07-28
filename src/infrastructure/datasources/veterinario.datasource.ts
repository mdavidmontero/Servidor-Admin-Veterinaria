import { bcryptAdapter } from "../../config";
import { VeterinarioModel } from "../../data";
import { VeterinarioDatasource } from "../../domain/datasources/veterinario.datasource";
import { CreateVetDto } from "../../domain/dtos/veterinarians/create-vet.dto";
import { VeterinarioEntity } from "../../domain/entities/veterinario.entity";

export class VeterinarioDatasourceImpl implements VeterinarioDatasource {
  async register(createVetDto: CreateVetDto): Promise<VeterinarioEntity> {
    const veterinario = await VeterinarioModel.findOne({
      email: createVetDto.email,
    });
    if (veterinario) throw "El veterinario ya existe";
    // Encriptar password
    const vet = new VeterinarioModel(createVetDto);
    vet.password = bcryptAdapter.hash(createVetDto.password, 10);
    await vet.save();
    return VeterinarioEntity.fromObject(vet);
  }
}
