import { Router } from 'express';
import {
  getFile,
  authUser,
  createUser,
  uploadVideo,
} from './useCases';
import { middlewareJwt, middlewareMulter } from './middleware';

const routes = Router();

routes.post('/auth', authUser);
routes.post('/users', createUser);

routes.use(middlewareJwt);

routes.get('/files/:id', getFile);

routes.post('/videos', middlewareMulter.array('avatar', 2), uploadVideo);


export default routes;