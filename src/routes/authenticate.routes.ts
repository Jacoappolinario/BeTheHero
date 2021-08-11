import { Router } from 'express';

import { AuthenticateOngController } from '../modules/ongs/useCases/authenticateOng/AuthenticateOngController';

const authenticateRoutes = Router();

const authenticateOngController = new AuthenticateOngController();

authenticateRoutes.post('/sessions', authenticateOngController.handle);

export { authenticateRoutes };
