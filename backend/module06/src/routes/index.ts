import { Router } from 'express';
import appointmetsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmetsRouter);

export default routes;
