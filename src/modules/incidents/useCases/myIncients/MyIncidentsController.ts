import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { MyIncidentsUseCase } from './MyIncidentsUseCase';

class MyIncidentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.ong;

    const listIncidentsUseCase = container.resolve(MyIncidentsUseCase);

    const all = await listIncidentsUseCase.execute({ ong_id: id });

    return response.json(all);
  }
}

export { MyIncidentsController };
