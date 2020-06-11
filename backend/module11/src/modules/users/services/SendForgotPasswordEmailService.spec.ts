import AppError from '@shared/errors/AppError';

import FakeMailProvider from '@shared/container/providers/EmailProvider/fakes/FakeMailProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import SendForgotPasswordEmail from './SendForgotPasswordEmailService';

describe('SendForgotPasswordEmail', () => {
  it('should be able to recover the password using the email', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeMailProvider = new FakeMailProvider();

    const sendForgotPasswordEmail = new SendForgotPasswordEmail(
      fakeUsersRepository,
      fakeMailProvider,
    );
    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    await fakeUsersRepository.create({
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      password: '123456',
    });

    await sendForgotPasswordEmail.execute({
      email: 'janedoe@example.com',
    });

    expect(sendMail).toHaveBeenCalled();
  });
});
