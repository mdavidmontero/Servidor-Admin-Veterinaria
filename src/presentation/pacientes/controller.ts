import { Response, Request } from "express";
import {
  CreatePacient,
  GetPaciente,
  PacienteRepository,
  UpdatePaciente,
} from "../../domain";
import { CreatePacientDto } from "../../domain/dtos/pacients/create-pacient-dto";
import { GetPacients } from "../../domain/use-cases/pacients/get-pacients";
import { UpdatePacientDto } from "../../domain/dtos/pacients/update-pacient-dto";
import { DeletePaciente } from "../../domain/use-cases/pacients/delete-pacient";

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

  public updatePaciente = (req: Request, res: Response) => {
    const id = req.params.id;
    const [error, updatePacientDto] = UpdatePacientDto.create(req.body);
    if (error)
      return res.status(400).json({
        error,
      });

    new UpdatePaciente(this.pacienteRepository)
      .execute(id, updatePacientDto!)
      .then((pacient) => res.json(pacient))
      .catch((error) => res.status(400).json({ error }));
  };

  public deletePaciente = (req: Request, res: Response) => {
    const id = req.params.id;
    new DeletePaciente(this.pacienteRepository)
      .execute(id)
      .then((pacient) =>
        res.json({ message: "Paciente eliminado correctamente" })
      )
      .catch((error) => res.status(400).json({ error }));
  };
}
