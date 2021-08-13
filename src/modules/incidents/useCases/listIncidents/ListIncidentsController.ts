import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListIncidentsUseCase } from './ListIncidentsUseCase';

class ListIncidentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { page = 1 } = request.query;

    const listIncidentsUseCase = container.resolve(ListIncidentsUseCase);

    const all = await listIncidentsUseCase.execute({ page: Number(page) });

    return response.json(all);
  }
}

export { ListIncidentsController };
