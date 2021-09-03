import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { ICreateIncidentDTO } from '../../dtos/ICreateIncidentDTO';
import { IIncidentsRepository } from '../../repositories/IIncidentsRepository';

@injectable()
class CreateIncidentUseCase {
  constructor(
    @inject('IncidentsRepository')
    private incidentsRepository: IIncidentsRepository,
  ) {}

  async execute({
    title,
    description,
    value,
    ong_id,
  }: ICreateIncidentDTO): Promise<void> {
    if (value <= 0) {
      throw new AppError('Error, invalid value.');
    }

    await this.incidentsRepository.create({
      title,
      description,
      value,
      ong_id,
    });
  }
}

export { CreateIncidentUseCase };
