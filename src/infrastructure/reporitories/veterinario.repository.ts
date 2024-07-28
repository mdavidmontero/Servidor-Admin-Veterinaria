import { CreateVetDto } from "../../domain/dtos/veterinarians/create-vet.dto";
import { VeterinarioDatasource } from "../../domain/datasources/veterinario.datasource";
import { VeterinarioEntity } from "../../domain/entities/veterinario.entity";

export class VeterinarioRepositoryImpl {
  constructor(private datasource: VeterinarioDatasource) {}

  register(createVetDto: CreateVetDto): Promise<VeterinarioEntity> {
    return this.datasource.register(createVetDto);
  }
}
