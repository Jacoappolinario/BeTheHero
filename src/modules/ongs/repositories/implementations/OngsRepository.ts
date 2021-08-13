import { getRepository, Repository } from 'typeorm';

import { ICreateOngDTO } from '../../dtos/ICreateOngDTO';
import { Ong } from '../../entities/Ong';
import { IOngsRepository } from '../IOngsRepository';

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
    // const ong = await this.repository.findOne({ email });
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

  async findByOngInformation(ong_id: string): Promise<Ong> {
    // const ongProfile = await this.repository.findOne({ id: ong_id });

    const ongProfile = await this.repository
      .createQueryBuilder('ongs')
      .leftJoinAndSelect('ongs.incident', 'incidents')
      // .select([
      //   'ongs.id',
      //   'ongs.name',
      //   'ongs.email',
      //   'ongs.whatsapp',
      //   'ongs.city',
      //   'ongs.uf',
      //   'incidents',
      // ])
      .where('ongs.id = :id', { id: ong_id })
      .getOne();

    return ongProfile;
  }

  async list(): Promise<Ong[]> {
    // const ongs = await this.repository.find();
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
