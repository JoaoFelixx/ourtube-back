import { Router } from 'express';
import {
  getFile,
  uploadFile,
} from './useCases';
import upload from './config/multerConfig';

const routes = Router();

routes.get('/', (request, response) => response.status(200).json('Hello World'))
routes.get('/:id_photo', getFile);

routes.post('/photos', upload.single('avatar'), uploadFile);

export default routes;