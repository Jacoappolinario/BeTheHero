import { ICreateIncidentDTO } from '../dtos/ICreateIncidentDTO';
import { Incident } from '../infra/typeorm/entities/Incident';

interface IIncidentsRepository {
  create(data: ICreateIncidentDTO): Promise<void>;
  list(page?: number): Promise<Incident[]>;
  delete(incident_id: string): Promise<void>;
  findById(ong_id: string): Promise<Incident>;
}

export { IIncidentsRepository };
