import { Ong } from '@modules/ongs/entities/Ong';
import { IOngsRepository } from '@modules/ongs/repositories/IOngsRepository';
import { inject, injectable } from 'tsyringe';

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
