import { IIncidentsRepository } from '@modules/incidents/repositories/IIncidentsRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

interface IRequest {
  ong_id: string;
  incident_id: string;
}

@injectable()
class DeleteIncidentUseCase {
  constructor(
    @inject('IncidentsRepository')
    private incidentsRepository: IIncidentsRepository,
  ) {}

  async execute({ ong_id, incident_id }: IRequest): Promise<void> {
    const incident = await this.incidentsRepository.findById(incident_id);

    if (!incident) {
      throw new AppError('Incident not found', 404);
    }

    if (incident.ong_id !== ong_id) {
      throw new AppError('Operation not permitted.', 401);
    }

    await this.incidentsRepository.delete(incident_id);
  }
}

export { DeleteIncidentUseCase };
