import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateOngUseCase } from './AuthenticateOngUseCase';

class AuthenticateOngController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    const authenticateOngUseCase = container.resolve(AuthenticateOngUseCase);

    const token = await authenticateOngUseCase.execute({
      password,
      email,
    });

    return response.json(token);
  }
}

export { AuthenticateOngController };
