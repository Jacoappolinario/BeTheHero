import { AppError } from '@errors/AppError';
import { ICreateOngDTO } from '@modules/ongs/dtos/ICreateOngDTO';
import { IOngsRepository } from '@modules/ongs/repositories/IOngsRepository';
import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateOngUseCase {
  constructor(
    @inject('OngsRepository')
    private ongsRepository: IOngsRepository,
  ) {}

  async execute({
    name,
    email,
    password,
    whatsapp,
    city,
    uf,
  }: ICreateOngDTO): Promise<void> {
    const ongAlreadyExists = await this.ongsRepository.findByEmail(email);

    if (ongAlreadyExists) {
      throw new AppError('Ong already exists');
    }

    const passwordHash = await hash(password, 8);

    await this.ongsRepository.create({
      name,
      email,
      password: passwordHash,
      whatsapp,
      city,
      uf,
    });
  }
}

export { CreateOngUseCase };
