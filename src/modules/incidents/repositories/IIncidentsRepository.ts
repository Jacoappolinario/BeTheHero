import { ICreateIncidentDTO } from '../dtos/ICreateIncidentDTO';
import { Incident } from '../entities/Incident';

interface IIncidentsRepository {
  create(data: ICreateIncidentDTO): Promise<void>;
  list(): Promise<Incident[]>;
  ListMyIncidents(ong_id: string): Promise<Incident[]>;
}

export { IIncidentsRepository };