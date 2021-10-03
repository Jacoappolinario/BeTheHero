import { AppError } from '@errors/AppError';
import { IncidentsRepositoryInMemory } from '@modules/incidents/repositories/in-memory/IncidentsRepositoryInMemory';
import { v4 as uuidV4 } from 'uuid';

import { CreateIncidentUseCase } from './CreateIncidentUseCase';

let createIncidentUseCase: CreateIncidentUseCase;
let incidentsRepositoryInMemory: IncidentsRepositoryInMemory;

describe('Create Incident', () => {
  beforeEach(() => {
    incidentsRepositoryInMemory = new IncidentsRepositoryInMemory();
    createIncidentUseCase = new CreateIncidentUseCase(
      incidentsRepositoryInMemory,
    );
  });

  it('should be able to create a new incident', async () => {
    const incident = {
      title: 'Incident Test',
      description: 'Incident description Test',
      value: 200,
      ong_id: uuidV4(),
    };

    await createIncidentUseCase.execute({
      title: incident.title,
      description: incident.description,
      value: incident.value,
      ong_id: incident.ong_id,
    });

    const incidentCreated = await incidentsRepositoryInMemory.findById(
      incident.ong_id,
    );

    expect(incidentCreated).toHaveProperty('id');
  });

  it('should not be able to create a new incident with value invalid', async () => {
    expect(async () => {
      const incident = {
        title: 'Incident Test',
        description: 'Incident description Test',
        value: -1,
        ong_id: uuidV4(),
      };

      await createIncidentUseCase.execute({
        title: incident.title,
        description: incident.description,
        value: incident.value,
        ong_id: incident.ong_id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
