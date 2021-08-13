import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateIncidentController } from '../modules/incidents/useCases/createIncident/CreateIncidentController';
import { DeleteIncidentController } from '../modules/incidents/useCases/deleteIncident/DeleteIncidentController';
import { ListIncidentsController } from '../modules/incidents/useCases/listIncidents/ListIncidentsController';
import { MyIncidentsController } from '../modules/incidents/useCases/myIncients/MyIncidentsController';

const incidentsRoutes = Router();

const createIncidentController = new CreateIncidentController();
const listIncidentsController = new ListIncidentsController();
const myIncidentsController = new MyIncidentsController();
const deleteIncidentController = new DeleteIncidentController();

incidentsRoutes.get('/', listIncidentsController.handle);
incidentsRoutes.use(ensureAuthenticated);
incidentsRoutes.post('/', createIncidentController.handle);
incidentsRoutes.get('/my-incidents', myIncidentsController.handle);
incidentsRoutes.delete('/:id', deleteIncidentController.handle);

export { incidentsRoutes };
