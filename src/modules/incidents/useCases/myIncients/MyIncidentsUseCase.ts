import { inject, injectable } from 'tsyringe';

import { Incident } from '../../entities/Incident';
import { IIncidentsRepository } from '../../repositories/IIncidentsRepository';

interface IRequest {
  ong_id: string;
}

@injectable()
class MyIncidentsUseCase {
  constructor(
    @inject('IncidentsRespository')
    private incidentsRepository: IIncidentsRepository,
  ) {}

  async execute({ ong_id }: IRequest): Promise<Incident[]> {
    const ongs = this.incidentsRepository.ListMyIncidents(ong_id);

    return ongs;
  }
}

export { MyIncidentsUseCase };
