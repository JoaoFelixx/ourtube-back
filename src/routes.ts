import { Router } from 'express';
import {
  authUser,
  createUser,
  uploadVideo,
  getAllVideos,
  getVideoById,
  createChannel,
  getChannelById,
  getChannelsData,
  updateChannelIcon,
  updateChannelBanner,
} from './useCases';
import { middlewareJwt, middlewareMulter } from './middleware';

const routes = Router();

routes.post('/auth', authUser);
routes.post('/users', createUser);

routes.get('/videos', getAllVideos);
routes.get('/files/:id', getVideoById);
routes.get('/channels', getChannelsData);
routes.get('/channels/:channel_id', getChannelById);

//routes.use(middlewareJwt);

routes.post('/channels', createChannel);
routes.post('/videos', middlewareMulter.array('video', 2), uploadVideo);

routes.put('/channels/icon/:channel_id', middlewareMulter.single('icon'), updateChannelIcon);
routes.put('/channels/banner/:channel_id', middlewareMulter.single('banner'), updateChannelBanner);

export { routes };