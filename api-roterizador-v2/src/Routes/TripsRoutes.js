import { Router } from 'express';
import TripsController from '../Controllers/TripsController';

const router = new Router();

//-----------rotas get------------
router.get('/', TripsController.index);
router.get('/routes', TripsController.index);
router.get('/:id', TripsController.show);

////-----------rotas Post------------
router.post('/', TripsController.store);

//-----------rotas Put------------
router.put('/:id', TripsController.update);

//-----------rotas delete------------
router.delete('/:id', TripsController.delete);

export default router;
