import { inject, injectable } from 'tsyringe';

import { ICreateIncidentDTO } from '../../dtos/ICreateIncidentDTO';
import { IIncidentsRepository } from '../../repositories/IIncidentsRepository';

@injectable()
class CreateIncidentUseCase {
  constructor(
    @inject('IncidentsRespository')
    private incidentsRepository: IIncidentsRepository,
  ) {}

  async execute({
    title,
    description,
    value,
    ong_id,
  }: ICreateIncidentDTO): Promise<void> {
    await this.incidentsRepository.create({
      title,
      description,
      value,
      ong_id,
    });
  }
}

export { CreateIncidentUseCase };
