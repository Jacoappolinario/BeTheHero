import { Incident } from '../../../incidents/entities/Incident';
import { ICreateOngDTO } from '../../dtos/ICreateOngDTO';
import { Ong } from '../../entities/Ong';
import { IOngsRepository } from '../IOngsRepository';

class OngsRepositoryInMemory implements IOngsRepository {
  ongs: Ong[] = [];

  async create({
    name,
    email,
    password,
    whatsapp,
    city,
    uf,
  }: ICreateOngDTO): Promise<void> {
    const ong = new Ong();

    Object.assign(ong, {
      name,
      email,
      password,
      whatsapp,
      city,
      uf,
    });

    this.ongs.push(ong);
  }
  async findByEmail(email: string): Promise<Ong> {
    return this.ongs.find(ong => ong.email === email);
  }
  async findById(id: string): Promise<Ong> {
    return this.ongs.find(ong => ong.id === id);
  }

  async findByIncidents(id: string): Promise<Incident[]> {
    const ong = this.ongs.find(ong => ong.id === id);

    return ong.incident;
  }

  async list(): Promise<Ong[]> {
    const all = this.ongs;

    return all;
  }
}

export { OngsRepositoryInMemory };
