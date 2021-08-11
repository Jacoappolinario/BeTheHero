import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListOngsUseCase } from './ListOngsUseCase';

class ListOngsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listOngsUseCase = container.resolve(ListOngsUseCase);

    const all = await listOngsUseCase.execute();

    return response.json(all);
  }
}

export { ListOngsController };
