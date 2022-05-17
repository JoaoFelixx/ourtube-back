import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express'
import { UserRepository } from '../../repositories';

async function authUser(request: Request, response: Response) {
  try {
    const { email, password } = request.body;

    const result = await UserRepository.auth(email);

    if (result instanceof Error)
      return response.status(400).json(result.message);

    const passwordIsCorrect = await bcrypt.compare(password, result.password);

    if (!passwordIsCorrect)
      return response.status(400).json('Email or/and password is invalid');

    const token = await jwt.sign({ id: result.id }, process.env.SECRET_KEY_JWT || '', { expiresIn: '1d' });

    response.status(201).json({ id: result.id, token });

  } catch (err) {
    return response.sendStatus(409)
  }
}

export default authUser;