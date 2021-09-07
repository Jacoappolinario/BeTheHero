import { inject, injectable } from 'tsyringe';

import { Ong } from '../../entities/Ong';
import { IOngsRepository } from '../../repositories/IOngsRepository';

@injectable()
class ListOngsUseCase {
  constructor(
    @inject('OngsRepository')
    private ongsRepository: IOngsRepository,
  ) {}

  async execute(): Promise<Ong[]> {
    const all = this.ongsRepository.list();

    return all;
  }
}

export { ListOngsUseCase };
