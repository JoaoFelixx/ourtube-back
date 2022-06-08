import { Router } from 'express';
import {
  authUserController,
  createUserController,
  updateIconController,
  createVideoController,
  updateBannerController,
  getAllVideosController,
  getMediaByIdController,
  createChannelController,
  getAllChannelsController,
  getChannelByIdController,
  getChannelByNameController,
  getChannelByUserIdController,
  getVideoByDescriptionController,
} from './useCases';
import { middlewareJwt, middlewareMulter } from './middleware';

const routes = Router();

routes.post('/auth', authUserController);
routes.post('/users', createUserController);

routes.get('/videos', getAllVideosController);
routes.get('/files/:id', getMediaByIdController);
routes.get('/channels', getAllChannelsController);
routes.get('/channel/:id', getChannelByIdController);
routes.get('/myChannel', getChannelByUserIdController);
routes.get('/channelByName/:name', getChannelByNameController);
routes.get('/videoByDescription/:description', getVideoByDescriptionController);

//routes.use(middlewareJwt);

routes.post('/channels', createChannelController);
routes.post('/videos', middlewareMulter.array('video', 2), createVideoController);

routes.put('/channels/icon/:channel_id', middlewareMulter.single('icon'), updateBannerController);
routes.put('/channels/banner/:channel_id', middlewareMulter.single('banner'), updateIconController);

export { routes };