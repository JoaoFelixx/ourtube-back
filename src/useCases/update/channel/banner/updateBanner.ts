import { Channel, Photo } from "../../../../interfaces";
import { Channels, Photos } from "../../../../models";

export async function updateBanner(photo: Photo): Promise<Channel | Error> {
  try {
    const { channel_id, id: banner_id } = await Photos.create<Photo>(photo);

    const channel = await Channels.findById({ channel_id });

    if (!channel)
      return new Error('Channel does not exists');

    channel.banner_id = banner_id;

    await channel.save();

    return channel;

  } catch (error) {
    return new Error('Error updating channel');
  }
}