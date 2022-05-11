import '../models/Videos';
import '../models/Photos';
import '../models/Channel';
import '../models/Enrolled';
import { model } from 'mongoose';
import { ChannelProps, ChannelDoc } from '../interfaces';

const Channel = model('channels');

interface UpdateIcon {
  icon_id?:  string;
  banner_id?: string;
  channel_id: string;
}

class ChannelsService {
  static async create(channel: ChannelProps): Promise<ChannelDoc> {
    return await Channel.create(channel) as ChannelDoc;
  }

  static async getAllChannels(): Promise<ChannelDoc[]> {
    return await Channel.find()
  }

  static async getChannelById(id: string) {
    return await Channel.findById(id);
  }

  static async updateIconAndPhoto({ channel_id, icon_id, banner_id }: UpdateIcon): Promise<ChannelDoc | Error> {
    const channel = await Channel.findById(channel_id) as ChannelDoc;

    if (!channel)
      return new Error('Channel does not exists');

    channel.icon_id = icon_id ? icon_id : channel.icon_id;
    channel.banner_id = banner_id ? banner_id : channel.banner_id;

    await channel.save();

    return channel;
  }
}

export default ChannelsService;