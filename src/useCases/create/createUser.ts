import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { UserService } from '../../services';
import { UserProps } from '../../interfaces';
import { randomUUID as uuid } from 'crypto';

async function createUser(request: Request, response: Response) {
  try {    
    const user: UserProps = {
      _id: uuid(),
      email: request.body.email.toLowerCase(),
      password: await bcrypt.hash(request.body.password, 8)
    }

    const result = await UserService.create(user);

    if (result instanceof Error)
      return response.status(400).json(result.message);
    
    return response.status(201).json({
      id: result.id, 
      email: result.email,
    })

  } catch (err) {
    response.sendStatus(409);
  }
}

export default createUser;