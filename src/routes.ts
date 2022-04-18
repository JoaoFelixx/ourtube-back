import { Router } from 'express';
import {
  getFile,
  authUser,
  createUser,
  uploadFile,
} from './useCases';
import upload from './config/multerConfig';
import { middlewareJwt } from './middleware';

const routes = Router();

routes.post('/auth', authUser);
routes.post('/users', createUser);

routes.use(middlewareJwt);

routes.get('/files/:id', getFile);

routes.post('/files', upload.single('avatar'), uploadFile);

export default routes;