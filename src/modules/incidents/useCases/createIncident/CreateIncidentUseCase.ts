import { AppError } from '@errors/AppError';
import { ICreateIncidentDTO } from '@modules/incidents/dtos/ICreateIncidentDTO';
import { IIncidentsRepository } from '@modules/incidents/repositories/IIncidentsRepository';
import { inject, injectable } from 'tsyringe';

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
