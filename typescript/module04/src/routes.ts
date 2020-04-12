import { Request, Response } from 'express'
import createUser from './services/CreateUser'

// string, number, boolean, object, Array
// interfaces

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'diego@rocketseat.com.br',
    password: '123456',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      { title: 'Javascript', experience: 100 },
    ]
  });

  console.log(user.email)

  return response.json({ message: "Hello World" })
}