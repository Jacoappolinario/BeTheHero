import { inject, injectable } from 'tsyringe';

import { Incident } from '../../entities/Incident';
import { IIncidentsRepository } from '../../repositories/IIncidentsRepository';

interface IResquest {
  page: number;
}

@injectable()
class ListIncidentsUseCase {
  constructor(
    @inject('IncidentsRespository')
    private incidentsRepository: IIncidentsRepository,
  ) {}

  async execute({ page }: IResquest): Promise<Incident[]> {
    const ongs = this.incidentsRepository.list(page);

    return ongs;
  }
}

export { ListIncidentsUseCase };
