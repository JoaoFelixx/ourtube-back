import { Router } from 'express';
import {
  authUserController,
  createUserController,
  updateIconController,
  createVideoController,
  updateBannerController,
  getAllVideosController,
  createChannelController,
  getAllChannelsController,
  getChannelByIdController,
  createSubscribeController,
  getChannelByNameController,
  getChannelByUserIdController,
  getVideoByDescriptionController,
  getUserSubscribedChannelsController
} from './useCases';
import { middlewareJwt, middlewareMulter } from './middleware';

const routes = Router();

routes.post('/auth', authUserController);
routes.post('/users', createUserController);

routes.get('/videos', getAllVideosController);
routes.get('/channels', getAllChannelsController);
routes.get('/channel/:id', getChannelByIdController);
routes.get('/channelByName/:name', getChannelByNameController);
routes.get('/videoByDescription/:description', getVideoByDescriptionController);

routes.use(middlewareJwt);

routes.get('/myChannel', getChannelByUserIdController);
routes.get('/user/subscribes', getUserSubscribedChannelsController);

routes.post('/videos', middlewareMulter.array('video', 2), createVideoController);
routes.post('/channels', createChannelController);
routes.post('/subscribe', createSubscribeController);

routes.put('/channels/icon/:channel_id', middlewareMulter.single('icon'), updateIconController);
routes.put('/channels/banner/:channel_id', middlewareMulter.single('banner'), updateBannerController);

export { routes };