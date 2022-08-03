import { Channel, Photo } from "../../../../interfaces";
import { Channels, Photos } from "../../../../models";

export async function updateBanner(photo: Photo): Promise<Channel | Error> {
  try {
    const { channel_id, _id } = await Photos.create<Photo>(photo);

    const channel = await Channels.findById({ _id: channel_id });

    if (!channel)
      return new Error('Channel does not exists');

    channel.banner_id = _id;

    await channel.save();

    return channel;

  } catch (error) {
    return new Error("Error updating channel`s banner");
  }
}