import bcrypt from 'bcryptjs';
import { User } from '../../../interfaces';
import { createUser } from './createUser';
import { Request, Response } from 'express';
import { randomUUID as uuid } from 'crypto';

export async function createUserController(request: Request, response: Response) {
  try {
    const regexEmail = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);

    const user: User = {
      _id: uuid(),
      email: request.body.email.toLowerCase(),
      password: await bcrypt.hash(request.body.password, 8),
    }

    if (!regexEmail.test(user.email))
      return response.status(400).json('Email is invalid');
    
    const result = await createUser(user);

    if (result instanceof Error)
      return response.status(400).json(result.message);

    return response.status(201).json({ id: result._id })

  } catch (err) {
    response.sendStatus(400);
  }
}