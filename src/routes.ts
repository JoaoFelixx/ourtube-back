import { Router } from 'express';
import {
  authUser,
  createUser,
  uploadVideo,
  getAllVideos,
  getVideoById,
} from './useCases';
import { middlewareJwt, middlewareMulter } from './middleware';

const routes = Router();

routes.post('/auth', authUser);
routes.post('/users', createUser);

//routes.use(middlewareJwt);

routes.get('/videos', getAllVideos);
routes.get('/files/:id', getVideoById);

routes.post('/videos', middlewareMulter.array('avatar', 2), uploadVideo);


export default routes;