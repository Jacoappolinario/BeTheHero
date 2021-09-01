import { ICreateOngDTO } from '../dtos/ICreateOngDTO';
import { Ong } from '../entities/Ong';

interface IOngsRepository {
  create(data: ICreateOngDTO): Promise<void>;
  findByEmail(email: string): Promise<Ong>;
  findById(id: string): Promise<Ong>;
  list(): Promise<Ong[]>;
  findByOngInformations(ong_id: string): Promise<Ong>;
}

export { IOngsRepository };
