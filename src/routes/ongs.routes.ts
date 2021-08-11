import { Router } from 'express';

import { CreateOngController } from '../modules/ongs/useCases/createOng/CreateOngController';
import { ListOngsController } from '../modules/ongs/useCases/listOngs/ListOngsController';

const ongsRoutes = Router();

const createOngController = new CreateOngController();
const listOngsController = new ListOngsController();

ongsRoutes.post('/', createOngController.handle);
ongsRoutes.get('/', listOngsController.handle);

export { ongsRoutes };
