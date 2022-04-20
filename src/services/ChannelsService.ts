import '../models/Channel';
import { model } from 'mongoose';
import { ChannelProps, ChannelDoc } from '../interfaces';

const Channel = model('channels');

class ChannelsService {
  static async create(channel: ChannelProps): Promise<ChannelDoc> {
    const result = await Channel.create(channel) as ChannelDoc;

    return result;
  }

  static async getChannelById(id: string): Promise<ChannelDoc | null> {
    return await Channel.findById(id);
  }

  static async getAllChannels(): Promise<ChannelDoc[]> {
    return await Channel.find();
  }
}

export default ChannelsService;