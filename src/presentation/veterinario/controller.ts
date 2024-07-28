import { Request, Response } from "express";
import { CreateVetDto } from "../../domain/dtos/veterinarians/create-vet.dto";
import { CreateVet } from "../../domain/use-cases/veterinarians/register-vet";
import { VetRepository } from "../../domain/repository/veterinario.repository";
import { CustomError } from "../../domain/errors/custom.error";

export class VeterinarioController {
  constructor(private readonly veterinario: VetRepository) {}
  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    return res.status(500).json({ error: "Internal Server Error" });
  };

  public register = async (req: Request, res: Response) => {
    const [error, createVetDto] = CreateVetDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateVet(this.veterinario)
      .execute(createVetDto!)
      .then((data) => res.json(data))
      .catch((error) => this.handleError(error, res));
  };
}
