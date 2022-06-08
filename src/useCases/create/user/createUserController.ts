import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { createUser } from './createUser';
import { User } from '../../../interfaces';
import { randomUUID as uuid } from 'crypto';

export async function createUserController(request: Request, response: Response) {
  try {
    const user: User = {
      _id: uuid(),
      email: request.body.email.toLowerCase(),
      password: await bcrypt.hash(request.body.password, 8)
    }

    const result = await createUser(user);

    if (result instanceof Error)
      return response.status(400).json(result.message);

    return response.status(201).json({ id: result._id })

  } catch (err) {
    response.sendStatus(400);
  }
}