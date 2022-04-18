import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface DecodedToken {
  id: string;
}

function middlewareJwt(request: Request, response: Response, next: NextFunction) {
  try {
    const { authorization } = request.headers;

    if (!authorization) throw new Error();

    const token = authorization.replace('Bearer', '').trim();
    
    const isValid = jwt.verify(token, process.env.SECRET_KEY_JWT || '');

    if (!isValid) 
      throw new Error();

    return next();

  } catch (err) {
    return response.sendStatus(401);
  }
}

export default middlewareJwt;