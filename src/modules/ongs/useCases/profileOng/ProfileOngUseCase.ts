import { Incident } from '@modules/incidents/entities/Incident';
import { IOngsRepository } from '@modules/ongs/repositories/IOngsRepository';
import { inject, injectable } from 'tsyringe';

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
