import { OngsRepository } from '@modules/ongs/infra/typeorm/repositories/OngsRepository';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '@shared/errors/AppError';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: ong_id } = verify(
      token,
      'bdfdf155edd09b1aac17692e1a528043',
    ) as IPayload;

    const ongsRepository = new OngsRepository();

    const ong = ongsRepository.findById(ong_id);

    if (!ong) {
      throw new AppError('Ong does not exists', 401);
    }

    request.ong = {
      id: ong_id,
    };

    next();
  } catch {
    throw new AppError('Invalid token!', 401);
  }
}
