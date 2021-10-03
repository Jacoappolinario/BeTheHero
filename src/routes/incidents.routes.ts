import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateIncidentController } from '../modules/incidents/useCases/createIncident/CreateIncidentController';
import { DeleteIncidentController } from '../modules/incidents/useCases/deleteIncident/DeleteIncidentController';
import { ListIncidentsController } from '../modules/incidents/useCases/listIncidents/ListIncidentsController';

const incidentsRoutes = Router();

const createIncidentController = new CreateIncidentController();
const listIncidentsController = new ListIncidentsController();

const deleteIncidentController = new DeleteIncidentController();

incidentsRoutes.get('/', listIncidentsController.handle);
incidentsRoutes.use(ensureAuthenticated);
incidentsRoutes.post('/', createIncidentController.handle);
incidentsRoutes.delete('/:id', deleteIncidentController.handle);

export { incidentsRoutes };
