import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateIncidentController } from '../modules/incidents/useCases/createIncident/CreateIncidentController';
import { ListIncidentsController } from '../modules/incidents/useCases/listIncidents/ListIncidentsController';
import { MyIncidentsController } from '../modules/incidents/useCases/myIncients/MyIncidentsController';

const incidentsRoutes = Router();

const createIncidentController = new CreateIncidentController();
const listIncidentsController = new ListIncidentsController();
const myIncidentsUseCase = new MyIncidentsController();

incidentsRoutes.get('/', listIncidentsController.handle);
incidentsRoutes.use(ensureAuthenticated);
incidentsRoutes.post('/', createIncidentController.handle);
incidentsRoutes.get('/my-incidents', myIncidentsUseCase.handle);

export { incidentsRoutes };
