import { Router } from 'express';

const routes = Router();

routes.post('/', (request, response) => {
  const { name, email } = request.body;

  return response.json({ message: 'Hello GoStack' });
});

export default routes;
