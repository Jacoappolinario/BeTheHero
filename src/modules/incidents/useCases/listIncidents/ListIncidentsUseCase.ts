import { inject, injectable } from 'tsyringe';

import { Incident } from '../../entities/Incident';
import { IIncidentsRepository } from '../../repositories/IIncidentsRepository';

@injectable()
class ListIncidentsUseCase {
  constructor(
    @inject('IncidentsRespository')
    private incidentsRepository: IIncidentsRepository,
  ) {}

  async execute(): Promise<Incident[]> {
    const ongs = this.incidentsRepository.list();

    return ongs;
  }
}

export { ListIncidentsUseCase };
