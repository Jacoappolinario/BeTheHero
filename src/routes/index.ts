import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { incidentsRoutes } from './incidents.routes';
import { ongsRoutes } from './ongs.routes';

const router = Router();

router.use('/ongs', ongsRoutes);
router.use('/incidents', incidentsRoutes);
router.use(authenticateRoutes);

export { router };
