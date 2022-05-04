import '../models/Videos';
import { model } from 'mongoose';
import { VideosProps, VideosDoc } from '../interfaces';

const Videos = model('videos');
class VideoService {
  static async create(file: VideosProps): Promise<VideosDoc> {
    return await Videos.create(file) as VideosDoc;
  }

  static async getVideoById(_id: string): Promise<VideosDoc | null> {
    return await Videos.findOne<VideosDoc>({ _id: _id });
  }

  static async getAllVideos(): Promise<VideosDoc[]> {
    return await Videos.find();
  }
}

export default VideoService;