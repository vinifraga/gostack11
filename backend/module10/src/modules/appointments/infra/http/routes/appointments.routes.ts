import { Router } from 'express';

import ensureAuthenticaded from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

// SoC: Separation of Concerns (separação de preocupações)
// DTO: Data Transfer Object
// Rotas: Receber a requisição, chamar outro arquivo e devolver uma resposta

appointmentsRouter.use(ensureAuthenticaded);

// appointmentsRouter.get('/', async (request, response) => {
//   const appointments = await appointmentsRepository.find();

//   return response.json(appointments);
// });

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
