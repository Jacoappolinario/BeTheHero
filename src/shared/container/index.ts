import { container } from 'tsyringe';

import { IIncidentsRepository } from '../../modules/incidents/repositories/IIncidentsRepository';
import { IncidentsRespository } from '../../modules/incidents/repositories/implementations/IncidentsRepository';
import { OngsRepository } from '../../modules/ongs/repositories/implementations/OngsRepository';
import { IOngsRepository } from '../../modules/ongs/repositories/IOngsRepository';

container.registerSingleton<IOngsRepository>('OngsRepository', OngsRepository);

container.registerSingleton<IIncidentsRepository>(
  'IncidentsRespository',
  IncidentsRespository,
);
