import { Incident } from '@modules/incidents/infra/typeorm/entities/Incident';

import { ICreateIncidentDTO } from '../../dtos/ICreateIncidentDTO';
import { IIncidentsRepository } from '../IIncidentsRepository';

class IncidentsRepositoryInMemory implements IIncidentsRepository {
  incidents: Incident[] = [];

  async create({
    title,
    description,
    value,
    ong_id,
  }: ICreateIncidentDTO): Promise<void> {
    const incident = new Incident();

    Object.assign(incident, {
      title,
      description,
      value,
      ong_id,
    });

    this.incidents.push(incident);
  }
  async list(): Promise<Incident[]> {
    const all = this.incidents;
    return all;
  }
  async delete(incident_id: string): Promise<void> {
    const incident = this.incidents.findIndex(
      incident => incident.id === incident_id,
    );

    this.incidents.splice(incident, 1);
  }
  async findById(ong_id: string): Promise<Incident> {
    const incident = this.incidents.find(
      incident => incident.ong_id === ong_id,
    );

    return incident;
  }
}

export { IncidentsRepositoryInMemory };
