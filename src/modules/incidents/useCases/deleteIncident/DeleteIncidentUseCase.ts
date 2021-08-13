import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { IIncidentsRepository } from '../../repositories/IIncidentsRepository';

interface IRequest {
  ong_id: string;
  incident_id: string;
}

@injectable()
class DeleteIncidentUseCase {
  constructor(
    @inject('IncidentsRespository')
    private incidentsRepository: IIncidentsRepository,
  ) {}

  async execute({ ong_id, incident_id }: IRequest): Promise<void> {
    const incident = await this.incidentsRepository.findById(ong_id);

    if (incident.ong_id !== ong_id) {
      throw new AppError('Operation not permitted.', 401);
    }

    await this.incidentsRepository.delete(incident_id);
  }
}

export { DeleteIncidentUseCase };
