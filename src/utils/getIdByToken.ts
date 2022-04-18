import 'dotenv/config'
import jwt from 'jsonwebtoken';

const getIdByToken = () => {
  try {
    const secretKey = process.env.SECRET_KEY_JWT || '';

    const token = jwt.sign({ id: 'a16d1s-ad6a4sd6-5adsasd4' }, secretKey, { expiresIn: '1d' })

    const { id } = jwt.decode(token) as { id: string };

    console.log(id)

    return id;    

  } catch (err) {
    console.log(err)
  }
}

getIdByToken()