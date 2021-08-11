import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListIncidentsUseCase } from './ListIncidentsUseCase';

class ListIncidentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listIncidentsUseCase = container.resolve(ListIncidentsUseCase);

    const all = await listIncidentsUseCase.execute();

    return response.json(all);
  }
}

export { ListIncidentsController };
