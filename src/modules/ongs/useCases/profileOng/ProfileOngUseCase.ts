import { inject, injectable } from 'tsyringe';

import { Ong } from '../../entities/Ong';
import { IOngsRepository } from '../../repositories/IOngsRepository';

interface IRequest {
  ong_id: string;
}

@injectable()
class ProfileOngUseCase {
  constructor(
    @inject('OngsRepository')
    private ongsRepository: IOngsRepository,
  ) {}

  async execute({ ong_id }: IRequest): Promise<Ong> {
    const ongProfile = this.ongsRepository.findByOngInformations(ong_id);

    return ongProfile;
  }
}

export { ProfileOngUseCase };
