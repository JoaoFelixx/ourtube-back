import '../models/Videos';
import { model } from 'mongoose';
import { VideosProps, VideosDoc } from '../interfaces';

const REQUIRED_DATA = '_id description mimetype photo_id channel_id createdAt updatedAt';

const Videos = model('videos');

class VideoService {
  static async create(file: VideosProps): Promise<VideosDoc> {
    return await Videos.create(file) as VideosDoc;
  }

  static async getVideoById(_id: string): Promise<VideosDoc | null> {
    return await Videos.findOne<VideosDoc>({ _id: _id });
  }

  static async getAllVideos(): Promise<VideosDoc[]> {
    return await Videos.find().select(REQUIRED_DATA).populate('channel_id')
  }

  static async searchVideoByDescription(description: string): Promise<VideosDoc[] | null> {
    return await Videos.find<VideosDoc>({ description: { $regex: description, $options: 'i' } })
      .select(REQUIRED_DATA)
      .limit(5);
  }
}

export default VideoService;