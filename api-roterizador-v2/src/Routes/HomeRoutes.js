import { Router } from 'express';
import HomeController from '../Controllers/HomeController';

const router = new Router();

router.get('/', HomeController.index);
export default router;
