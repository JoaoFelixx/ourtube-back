import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express'
import { authUser } from './authUser';

export async function authUserController(request: Request, response: Response) {
  try {
    const { email, password } = request.body;

    const result = await authUser(email);

    if (result instanceof Error)
      return response.status(400).json(result.message);

    const [user, channel] = result;

    const passwordIsCorrect = await bcrypt.compare(password, user.password);

    if (!passwordIsCorrect)
      return response.status(400).json('Email or/and password is invalid');

    const token = await jwt.sign({ id: channel._id }, process.env.SECRET_KEY_JWT || '', { expiresIn: '1d' });

    response.status(201).json({ id: channel._id, token });

  } catch (err) {
    return response.sendStatus(400)
  }
}