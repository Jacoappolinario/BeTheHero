import { Incident } from '@modules/incidents/infra/typeorm/entities/Incident';
import { ICreateOngDTO } from '@modules/ongs/dtos/ICreateOngDTO';
import { IOngsRepository } from '@modules/ongs/repositories/IOngsRepository';
import { getRepository, Repository } from 'typeorm';

import { Ong } from '../entities/Ong';

class OngsRepository implements IOngsRepository {
  private repository: Repository<Ong>;

  constructor() {
    this.repository = getRepository(Ong);
  }

  async create({
    name,
    email,
    password,
    whatsapp,
    city,
    uf,
  }: ICreateOngDTO): Promise<void> {
    const ong = this.repository.create({
      name,
      email,
      password,
      whatsapp,
      city,
      uf,
    });

    await this.repository.save(ong);
  }

  async findByEmail(email: string): Promise<Ong> {
    const ong = await this.repository
      .createQueryBuilder('ongs')
      .where('ongs.email = :email', { email })
      .addSelect('ongs.password')
      .getOne();

    return ong;
  }

  async findById(id: string): Promise<Ong> {
    const ong = this.repository.findOne(id);

    return ong;
  }

  async findByIncidents(id: string): Promise<Incident[]> {
    const ong = await this.repository.findOne({
      relations: ['incident'],
      where: { id },
    });

    return ong.incident;
  }

  async list(): Promise<Ong[]> {
    const ongs = await this.repository
      .createQueryBuilder('ongs')
      .select([
        'ongs.id',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ])
      .getMany();

    return ongs;
  }
}

export { OngsRepository };
