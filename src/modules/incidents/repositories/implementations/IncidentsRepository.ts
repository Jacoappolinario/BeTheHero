import { getRepository, Repository } from 'typeorm';

import { ICreateIncidentDTO } from '../../dtos/ICreateIncidentDTO';
import { Incident } from '../../entities/Incident';
import { IIncidentsRepository } from '../IIncidentsRepository';

class IncidentsRespository implements IIncidentsRepository {
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

  async list(): Promise<Incident[]> {
    // const incidents = await this.repository.find({ relations: ['ong'] });
    const incidents = await this.repository
      .createQueryBuilder('incidents')
      .leftJoinAndSelect('incidents.ong', 'ong')
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
      .getMany();

    return incidents;
  }

  async ListMyIncidents(ong_id: string): Promise<Incident[]> {
    const incidents = await this.repository.find({ ong_id });

    return incidents;
  }
}

export { IncidentsRespository };
