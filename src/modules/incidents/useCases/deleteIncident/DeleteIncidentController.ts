import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteIncidentUseCase } from './DeleteIncidentUseCase';

class DeleteIncidentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.ong;
    const incident_id = request.params.id;

    const deleteIncidentUseCase = container.resolve(DeleteIncidentUseCase);

    await deleteIncidentUseCase.execute({ ong_id: id, incident_id });

    return response.status(200).send();
  }
}

export { DeleteIncidentController };
