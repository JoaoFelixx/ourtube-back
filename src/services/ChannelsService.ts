import '../models/Videos';
import '../models/Photos';
import '../models/Channel';
import '../models/Enrolled';
import { model, Types } from 'mongoose';
import { ChannelProps, ChannelDoc, EnrolledProps, PhotosProps, VideosProps } from '../interfaces';

const Channel = model('channels');

interface UpdateIcon {
  icon_id?: Types.ObjectId | string;
  banner_id?: Types.ObjectId | string;
  channel_id: Types.ObjectId | string;
}

class ChannelsService {
  static async create(channel: ChannelProps): Promise<ChannelDoc> {
    const result = await Channel.create(channel) as ChannelDoc;

    return result;
  }

  static async getAllChannels(): Promise<ChannelDoc[]> {
    return await Channel.find()
  }

  static async getChannelById(id: string | Types.ObjectId) {
    return await Channel.findById(id)
      .populate(['banner_id', 'icon_id'])
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