import { IncidentsRepository } from '@modules/incidents/infra/typeorm/repositories/IncidentsRepository';
import { IIncidentsRepository } from '@modules/incidents/repositories/IIncidentsRepository';
import { OngsRepository } from '@modules/ongs/infra/typeorm/repositories/OngsRepository';
import { IOngsRepository } from '@modules/ongs/repositories/IOngsRepository';
import { container } from 'tsyringe';

container.registerSingleton<IOngsRepository>('OngsRepository', OngsRepository);

container.registerSingleton<IIncidentsRepository>(
  'IncidentsRepository',
  IncidentsRepository,
);
