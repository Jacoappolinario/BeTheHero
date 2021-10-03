import { ICreateIncidentDTO } from '@modules/incidents/dtos/ICreateIncidentDTO';
import { IIncidentsRepository } from '@modules/incidents/repositories/IIncidentsRepository';
import { getRepository, Repository } from 'typeorm';

import { Incident } from '../entities/Incident';

class IncidentsRepository implements IIncidentsRepository {
  private repository: Repository<Incident>;

  constructor() {
    this.repository = getRepository(Incident);
  }

  async create({
    title,
    description,
    value,
    ong_id,
  }: ICreateIncidentDTO): Promise<void> {
    const incident = this.repository.create({
      title,
      description,
      value,
      ong_id,
    });

    await this.repository.save(incident);
  }

  async list(page: number): Promise<Incident[]> {
    const incidents = await this.repository
      .createQueryBuilder('incidents')
      .leftJoinAndSelect('incidents.ong', 'ong')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.id',
        'incidents.title',
        'incidents.description',
        'incidents.value',
        'incidents.ong_id',
        'ong.id',
        'ong.name',
        'ong.email',
        'ong.whatsapp',
        'ong.city',
        'ong.uf',
      ])
      .orderBy('incidents.id', 'ASC')
      .getMany();

    return incidents;
  }

  async delete(incident_id: string): Promise<void> {
    await this.repository.delete(incident_id);
  }

  async findById(incident_id: string): Promise<Incident> {
    const incident = await this.repository.findOne(incident_id);

    return incident;
  }
}

export { IncidentsRepository };
