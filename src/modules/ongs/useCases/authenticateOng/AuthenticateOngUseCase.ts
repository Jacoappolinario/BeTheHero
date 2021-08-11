import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { IOngsRepository } from '../../repositories/IOngsRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IReponse {
  ong: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateOngUseCase {
  constructor(
    @inject('OngsRepository')
    private ongsRepository: IOngsRepository,
  ) {}

  async execute({ email, password }: IRequest): Promise<IReponse> {
    const ong = await this.ongsRepository.findByEmail(email);

    if (!ong) {
      throw new AppError('Email or password incorrect!');
    }

    const passwordMatch = await compare(password, ong.password);

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect!');
    }

    const token = sign({}, 'bdfdf155edd09b1aac17692e1a528043', {
      subject: ong.id,
      expiresIn: '1d',
    });

    const tokenReturn: IReponse = {
      token,
      ong: {
        name: ong.name,
        email: ong.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateOngUseCase };
