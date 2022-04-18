import 'dotenv/config'
import jwt from 'jsonwebtoken';

const getIdByToken = (token: string): string => {
  const { id } = jwt.decode(token) as { id: string };

  return id;
}

export default getIdByToken;