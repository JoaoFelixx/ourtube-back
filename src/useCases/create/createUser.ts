import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { UserService } from '../../services';
import { UserProps } from '../../interfaces';

async function createUser(request: Request, response: Response) {
  try {    
    const user: UserProps = {
      email: request.body.email.toLowerCase(),
      password: await bcrypt.hash(request.body.password, 8)
    }

    const result = await UserService.create(user);

    if (result instanceof Error)
      return response.status(400).json(result.message);

    result.password = '';

    return response.status(201).json(result)

  } catch (err) {
    response.sendStatus(409);
  }
}

export default createUser;