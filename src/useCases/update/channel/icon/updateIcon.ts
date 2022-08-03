import { Channel } from "../../../../interfaces";
import { Channels } from "../../../../models";

interface BannerUpdate {
  icon_src: string;
  _id: string;
}

export async function updateIcon({ _id, icon_src }: BannerUpdate): Promise<Channel | Error> {
  try {
    const channel = await Channels.findOne({ _id });

    if (!channel)
      return new Error('Channel does not exists');

    channel.icon_src = icon_src;

    await channel.save();

    return channel;

  } catch (error) {
    return new Error("Error updating channel's icon");
  }
}