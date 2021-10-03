import { Incident } from '@modules/incidents/entities/Incident';
import { IIncidentsRepository } from '@modules/incidents/repositories/IIncidentsRepository';
import { inject, injectable } from 'tsyringe';

interface IResquest {
  page: number;
}

@injectable()
class ListIncidentsUseCase {
  constructor(
    @inject('IncidentsRepository')
    private incidentsRepository: IIncidentsRepository,
  ) {}

  async execute({ page }: IResquest): Promise<Incident[]> {
    const ongs = this.incidentsRepository.list(page);

    return ongs;
  }
}

export { ListIncidentsUseCase };
