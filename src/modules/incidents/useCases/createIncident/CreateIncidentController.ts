import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateIncidentUseCase } from './CreateIncidentUseCase';

class CreateIncidentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.ong;
    const { title, description, value } = request.body;

    const createIncidentUseCase = container.resolve(CreateIncidentUseCase);

    await createIncidentUseCase.execute({
      title,
      description,
      value,
      ong_id: id,
    });

    return response.status(201).send();
  }
}

export { CreateIncidentController };
