import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ProfileOngController } from '../modules/ongs/useCases/profileOng/ProfileOngController';

const profileRoutes = Router();

const profileOngController = new ProfileOngController();

profileRoutes.use(ensureAuthenticated);
profileRoutes.get('/', profileOngController.handle);

export { profileRoutes };
