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
import { CustomError } from "../../domain/errors/custom.error";

export class PacienteContoller {
  constructor(private readonly pacienteRepository: PacienteRepository) {}
  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    return res.status(500).json({ error: "Internal Server Error" });
  };

  public createPacient = (req: Request, res: Response) => {
    const [error, createPacientDto] = CreatePacientDto.create(req.body);
    if (error) return this.handleError(error, res);

    new CreatePacient(this.pacienteRepository)
      .execute(createPacientDto!)
      .then((pacient) => res.json(pacient))
      .catch((error) => this.handleError(error, res));
  };

  public getPacientes = (req: Request, res: Response) => {
    new GetPacients(this.pacienteRepository)
      .execute()
      .then((pacients) => res.json(pacients))
      .catch((error) => this.handleError(error, res));
  };

  public getPaciente = (req: Request, res: Response) => {
    const id = req.params.id;
    new GetPaciente(this.pacienteRepository)
      .execute(id)
      .then((pacient) => res.json(pacient))
      .catch((error) => this.handleError(error, res));
  };

  public updatePaciente = (req: Request, res: Response) => {
    const id = req.params.id;
    const [error, updatePacientDto] = UpdatePacientDto.create(req.body);
    if (error) return this.handleError(error, res);

    new UpdatePaciente(this.pacienteRepository)
      .execute(id, updatePacientDto!)
      .then((pacient) => res.json(pacient))
      .catch((error) => this.handleError(error, res));
  };

  public deletePaciente = (req: Request, res: Response) => {
    const id = req.params.id;
    new DeletePaciente(this.pacienteRepository)
      .execute(id)
      .then((pacient) =>
        res.json({ message: "Paciente eliminado correctamente" })
      )
      .catch((error) => this.handleError(error, res));
  };
}
