import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ProfileOngUseCase } from './ProfileOngUseCase';

class ProfileOngController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.ong;

    const profileOngUseCase = container.resolve(ProfileOngUseCase);

    const ongProfile = await profileOngUseCase.execute({ id });

    return response.json(ongProfile);
  }
}

export { ProfileOngController };
