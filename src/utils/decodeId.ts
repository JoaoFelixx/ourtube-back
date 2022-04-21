import 'dotenv/config'
import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

const decodeId = (authorization: string | undefined): Types.ObjectId | void => {
  if (!authorization) return

  const token = authorization.replace('Bearer', '').trim();

  const { id } = jwt.decode(token) as { id: Types.ObjectId };

  return id;
}

export default decodeId;