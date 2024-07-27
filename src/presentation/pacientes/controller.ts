import { Response, Request } from "express";
import { CreatePacient, GetPaciente, PacienteRepository } from "../../domain";
import { CreatePacientDto } from "../../domain/dtos/pacients/create-pacient-dto";
import { GetPacients } from "../../domain/use-cases/pacients/get-pacients";

export class PacienteContoller {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  public createPacient = (req: Request, res: Response) => {
    const [error, createPacientDto] = CreatePacientDto.create(req.body);
    if (error)
      return res.status(400).json({
        error,
      });

    new CreatePacient(this.pacienteRepository)
      .execute(createPacientDto!)
      .then((pacient) => res.json(pacient))
      .catch((error) => res.status(400).json({ error }));
  };

  public getPacientes = (req: Request, res: Response) => {
    new GetPacients(this.pacienteRepository)
      .execute()
      .then((pacients) => res.json(pacients))
      .catch((error) => res.status(400).json({ error }));
  };

  public getPaciente = (req: Request, res: Response) => {
    const id = req.params.id;
    new GetPaciente(this.pacienteRepository)
      .execute(id)
      .then((pacient) => res.json(pacient))
      .catch((error) => res.status(400).json({ error }));
  };
}
