import { Channel } from "../../../../interfaces";
import { Channels } from "../../../../models";

interface BannerUpdate {
  banner_src: string;
  _id: string;
}

export async function updateBanner({ _id, banner_src }: BannerUpdate): Promise<Channel | Error> {
  try {
    const channel = await Channels.findById({ _id });

    if (!channel)
      return new Error('Channel does not exists');

    channel.banner_src = banner_src;

    await channel.save();

    return channel;

  } catch (error) {
    return new Error("Error updating channel`s banner");
  }
}