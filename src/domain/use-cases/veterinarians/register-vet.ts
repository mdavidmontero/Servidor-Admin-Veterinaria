import { CreateVetDto } from "../../dtos/veterinarians/create-vet.dto";
import { VeterinarioEntity } from "../../entities/veterinario.entity";
import { VetRepository } from "../../repository/veterinario.repository";

export interface CreateVetUseCase {
  execute(dto: CreateVetDto): Promise<VeterinarioEntity>;
}

export class CreateVet implements CreateVetUseCase {
  constructor(private readonly repository: VetRepository) {}
  execute(dto: CreateVetDto): Promise<VeterinarioEntity> {
    return this.repository.register(dto);
  }
}
