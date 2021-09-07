import { AppError } from '../../../../errors/AppError';
import { ICreateOngDTO } from '../../dtos/ICreateOngDTO';
import { OngsRepositoryInMemory } from '../../repositories/in-memory/OngsRepositoryInMemory';
import { CreateOngUseCase } from '../createOng/CreateOngUseCase';
import { AuthenticateOngUseCase } from './AuthenticateOngUseCase';

let authenticateOngUseCase: AuthenticateOngUseCase;
let ongsRepositoryInMemory: OngsRepositoryInMemory;
let createOngUseCase: CreateOngUseCase;

describe('Authenticate Ong', () => {
  beforeEach(() => {
    ongsRepositoryInMemory = new OngsRepositoryInMemory();
    authenticateOngUseCase = new AuthenticateOngUseCase(ongsRepositoryInMemory);
    createOngUseCase = new CreateOngUseCase(ongsRepositoryInMemory);
  });

  it('should be able to authenticate a ong', async () => {
    const ong: ICreateOngDTO = {
      name: 'Ong Test',
      email: 'ong@test.com',
      password: '12345',
      whatsapp: '61995639350',
      city: 'Gama',
      uf: 'DF',
    };

    await createOngUseCase.execute(ong);

    const result = await authenticateOngUseCase.execute({
      email: ong.email,
      password: ong.password,
    });

    expect(result).toHaveProperty('token');
  });

  it('should not be able to authenticate an nonexistent ong', () => {
    expect(async () => {
      await authenticateOngUseCase.execute({
        email: 'false@gmail.com',
        password: '12345',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with incorrect password', () => {
    expect(async () => {
      const ong: ICreateOngDTO = {
        name: 'Ong Test',
        email: 'ong@test.com',
        password: '12345',
        whatsapp: '61995639350',
        city: 'Gama',
        uf: 'DF',
      };

      await createOngUseCase.execute(ong);

      await authenticateOngUseCase.execute({
        email: ong.email,
        password: 'incorrectPassword',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
