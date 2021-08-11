import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateOngUseCase } from './CreateOngUseCase';

class CreateOngController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, whatsapp, city, uf } = request.body;

    const createOngUseCase = container.resolve(CreateOngUseCase);

    await createOngUseCase.execute({
      name,
      email,
      password,
      whatsapp,
      city,
      uf,
    });

    return response.status(201).send();
  }
}

export { CreateOngController };
