import { Router } from 'express';
import {
  getFile,
  createUser,
  uploadFile,
} from './useCases';
import upload from './config/multerConfig';

const routes = Router();

routes.get('/files/:id_photo', getFile);

routes.post('/users', createUser);
routes.post('/files', upload.single('avatar'), uploadFile);

export default routes;