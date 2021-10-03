import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { incidentsRoutes } from './incidents.routes';
import { ongsRoutes } from './ongs.routes';
import { profileRoutes } from './profile.routes';

const router = Router();

router.use('/ongs', ongsRoutes);
router.use('/incidents', incidentsRoutes);
router.use('/profile', profileRoutes);
router.use(authenticateRoutes);

export { router };
