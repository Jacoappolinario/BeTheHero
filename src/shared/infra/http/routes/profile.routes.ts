import { ProfileOngController } from '@modules/ongs/useCases/profileOng/ProfileOngController';
import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const profileRoutes = Router();

const profileOngController = new ProfileOngController();

profileRoutes.use(ensureAuthenticated);
profileRoutes.get('/', profileOngController.handle);

export { profileRoutes };
