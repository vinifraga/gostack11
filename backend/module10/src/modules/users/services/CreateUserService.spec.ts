import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createAppointment = new CreateUserService(fakeUsersRepository);

    const user = await createAppointment.execute({
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with same email from another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createAppointment = new CreateUserService(fakeUsersRepository);

    await createAppointment.execute({
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      password: '123456',
    });

    expect(
      createAppointment.execute({
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
