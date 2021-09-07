import { inject, injectable } from 'tsyringe';

import { Incident } from '../../../incidents/entities/Incident';
import { IOngsRepository } from '../../repositories/IOngsRepository';

interface IRequest {
  id: string;
}

@injectable()
class ProfileOngUseCase {
  constructor(
    @inject('OngsRepository')
    private ongsRepository: IOngsRepository,
  ) {}

  async execute({ id }: IRequest): Promise<Incident[]> {
    const incident = await this.ongsRepository.findByIncidents(id);

    return incident;
  }
}

export { ProfileOngUseCase };
