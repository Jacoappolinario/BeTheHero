import { Incident } from '@modules/incidents/infra/typeorm/entities/Incident';

import { ICreateOngDTO } from '../dtos/ICreateOngDTO';
import { Ong } from '../infra/typeorm/entities/Ong';

interface IOngsRepository {
  create(data: ICreateOngDTO): Promise<void>;
  findByEmail(email: string): Promise<Ong>;
  findById(id: string): Promise<Ong>;
  findByIncidents(id: string): Promise<Incident[]>;
  list(): Promise<Ong[]>;
}

export { IOngsRepository };
