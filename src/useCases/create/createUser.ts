import { Request, Response } from 'express';
import { UserService } from '../../services';

async function createUser(request: Request, response: Response) {
  try {    
    const result = await UserService.create(request.body);

    return response.status(201).json(result)

  } catch (err) {
    response.sendStatus(409);
  }
}

export default createUser;