import { CreateVetDto } from "../dtos/veterinarians/create-vet.dto";
import { VeterinarioEntity } from "../entities/veterinario.entity";

export abstract class VeterinarioDatasource {
  abstract register(createVetDto: CreateVetDto): Promise<VeterinarioEntity>;
}
