import { AuthenticateOngController } from '@modules/ongs/useCases/authenticateOng/AuthenticateOngController';
import { Router } from 'express';

const authenticateRoutes = Router();

const authenticateOngController = new AuthenticateOngController();

authenticateRoutes.post('/sessions', authenticateOngController.handle);

export { authenticateRoutes };
